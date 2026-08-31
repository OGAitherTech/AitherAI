import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const model = process.env.AITHER_MODEL || "openrouter/free";
const apiKey = process.env.OPENROUTER_API_KEY;

app.use(express.json({ limit: "4mb" }));
app.use(express.static(path.join(__dirname, "public")));

const systemPrompt = `You are Aither AI, a friendly, capable general-purpose AI assistant. Answer naturally and clearly. Use Markdown when useful. Be honest when you are unsure. You are a hosted AI assistant; never claim the model runs on the user's device.`;

app.get("/api/health", (_req, res) => {
  res.json({ ok: Boolean(apiKey), configured: Boolean(apiKey), mode: "hosted", provider: "OpenRouter", model });
});

app.post("/api/chat", async (req, res) => {
  if (!apiKey) return res.status(503).json({ error: "Aither's server is missing OPENROUTER_API_KEY." });

  try {
    const incoming = Array.isArray(req.body.messages) ? req.body.messages : [];
    const messages = incoming
      .filter(m => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
      .slice(-30);

    if (!messages.length) return res.status(400).json({ error: "No message supplied." });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "X-Title": "Aither AI"
      },
      body: JSON.stringify({ model, messages: [{ role: "system", content: systemPrompt }, ...messages], temperature: 0.7 })
    });

    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data?.error?.message || "Hosted AI request failed." });

    const reply = data?.choices?.[0]?.message?.content;
    if (!reply) return res.status(502).json({ error: "The AI returned no response." });
    res.json({ reply, model: data.model || model, provider: "OpenRouter" });
  } catch (error) {
    console.error("Aither AI error:", error);
    res.status(502).json({ error: "Aither could not reach the hosted AI service." });
  }
});

app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(port, () => console.log(`Aither AI running on port ${port}`));
