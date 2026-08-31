import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const openRouterKey = process.env.OPENROUTER_API_KEY;
const model = process.env.AITHER_MODEL || "openrouter/free";

app.use(express.json({ limit: "4mb" }));
app.use(express.static(path.join(__dirname, "public")));

const systemPrompt = `You are Aither AI, a friendly, capable general-purpose AI assistant.
Answer clearly and naturally. Be concise by default, but provide detail when useful.
Use Markdown when it improves readability.
You are a hosted AI assistant. Never claim that you run the language model on the user's device.
If you do not know something, say so instead of inventing facts.`;

app.get("/api/health", (_req, res) => {
  res.json({
    ok: Boolean(openRouterKey),
    mode: "hosted",
    configured: Boolean(openRouterKey),
    provider: "OpenRouter",
    model
  });
});

app.post("/api/chat", async (req, res) => {
  if (!openRouterKey) {
    return res.status(503).json({
      error: "Aither AI is not configured yet. The server needs its private OPENROUTER_API_KEY environment variable."
    });
  }

  try {
    const incoming = Array.isArray(req.body.messages) ? req.body.messages : [];
    const messages = incoming
      .filter(m => (m?.role === "user" || m?.role === "assistant") && typeof m.content === "string")
      .slice(-30);

    if (!messages.length) return res.status(400).json({ error: "No message supplied." });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${openRouterKey}`,
        "Content-Type": "application/json",
        "X-Title": "Aither AI"
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        temperature: 0.7,
        stream: false
      })
    });

    const data = await response.json();
    if (!response.ok) {
      console.error("OpenRouter error:", data);
      return res.status(response.status).json({
        error: data?.error?.message || data?.error || "The hosted AI service returned an error."
      });
    }

    const reply = data?.choices?.[0]?.message?.content;
    if (!reply) return res.status(502).json({ error: "The AI service returned no response." });

    res.json({
      reply,
      model: data.model || model,
      local: false,
      provider: "OpenRouter"
    });
  } catch (error) {
    console.error("Aither hosted AI error:", error);
    res.status(502).json({ error: "Aither could not reach its hosted AI service. Please try again." });
  }
});

app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(port, () => console.log(`Aither AI running on port ${port} using ${model} through OpenRouter`));
