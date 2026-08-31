import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ollama from "ollama";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const model = process.env.AITHER_MODEL || "llama3.2:3b";

app.use(express.json({ limit: "4mb" }));
app.use(express.static(path.join(__dirname, "public")));

const systemPrompt = `You are Aither AI, a friendly, helpful local AI assistant.
You run through a local Ollama model, so never claim to use OpenAI, Anthropic, Gemini, or another remote AI API.
Be concise by default, explain clearly, and use Markdown when useful.
If you do not know something, say so instead of inventing facts.`;

app.get("/api/health", async (_req, res) => {
  try {
    const models = await ollama.list();
    const installed = models.models?.some(m => m.name === model || m.name?.startsWith(`${model}:`));
    res.json({ ok: true, mode: "local", model, installed, ollama: true });
  } catch {
    res.json({ ok: false, mode: "local", model, installed: false, ollama: false });
  }
});

app.get("/api/models", async (_req, res) => {
  try {
    const result = await ollama.list();
    res.json({ models: (result.models || []).map(m => m.name) });
  } catch {
    res.status(503).json({ error: "Ollama is not running. Install Ollama and start it first." });
  }
});

app.post("/api/chat", async (req, res) => {
  try {
    const incoming = Array.isArray(req.body.messages) ? req.body.messages : [];
    const messages = incoming
      .filter(m => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
      .slice(-30);

    if (!messages.length) return res.status(400).json({ error: "No message supplied." });

    const response = await ollama.chat({
      model,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      stream: false,
      options: { temperature: 0.7 }
    });

    res.json({ reply: response.message?.content || "I didn't generate a response.", model, local: true });
  } catch (error) {
    console.error("Aither local model error:", error.message);
    res.status(503).json({
      error: `Aither could not reach the local model. Make sure Ollama is installed, running, and '${model}' is downloaded.`
    });
  }
});

app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(port, () => console.log(`Aither AI running locally on http://localhost:${port} using ${model}`));
