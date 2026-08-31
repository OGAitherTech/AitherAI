import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const hfToken = process.env.HF_TOKEN;
const model = process.env.AITHER_MODEL || "openai/gpt-oss-120b:fastest";

app.use(express.json({ limit: "4mb" }));
app.use(express.static(path.join(__dirname, "public")));

const systemPrompt = `You are Aither AI, a friendly, capable general-purpose AI assistant.
Answer clearly and naturally. Be concise by default, but provide detail when useful.
Use Markdown when it improves readability.
Aither uses hosted inference and does not run the language model on the user's device.
If you do not know something, say so instead of inventing facts.`;

app.get("/api/health", (_req, res) => {
  res.json({ ok: Boolean(hfToken), mode: "hosted", configured: Boolean(hfToken), model: model.split(":")[0] });
});

app.post("/api/chat", async (req, res) => {
  if (!hfToken) {
    return res.status(503).json({ error: "Aither AI is not configured yet. The server needs its private HF_TOKEN environment variable." });
  }

  try {
    const incoming = Array.isArray(req.body.messages) ? req.body.messages : [];
    const messages = incoming
      .filter(m => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
      .slice(-30);

    if (!messages.length) return res.status(400).json({ error: "No message supplied." });

    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${hfToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model, messages: [{ role: "system", content: systemPrompt }, ...messages], temperature: 0.7, stream: false })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("Hosted inference error:", data);
      return res.status(response.status).json({ error: data?.error || "The hosted AI service returned an error." });
    }

    const reply = data?.choices?.[0]?.message?.content;
    if (!reply) return res.status(502).json({ error: "The AI service returned no response." });
    res.json({ reply, model: model.split(":")[0], local: false });
  } catch (error) {
    console.error("Aither hosted AI error:", error);
    res.status(502).json({ error: "Aither could not reach its hosted AI service. Please try again." });
  }
});

app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(port, () => console.log(`Aither AI running on port ${port} using hosted model ${model}`));
