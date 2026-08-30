import "dotenv/config";
import express from "express";
import OpenAI from "openai";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;
const client = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

const SYSTEM = `You are Aither AI, a helpful, witty, energetic AI assistant. Be clear and friendly. You are the AI inside the Aither AI application. Do not claim to have abilities you do not have.`;

app.get("/api/health", (_req, res) => res.json({ ok: true, configured: !!client }));

app.post("/api/chat", async (req, res) => {
  try {
    if (!client) return res.status(500).json({ error: "OPENAI_API_KEY is not configured on the server." });
    const messages = Array.isArray(req.body.messages) ? req.body.messages : [];
    const safe = messages.filter(m => m && ["user", "assistant"].includes(m.role) && typeof m.content === "string").slice(-30).map(m => ({ role: m.role, content: m.content.slice(0, 12000) }));
    if (!safe.length) return res.status(400).json({ error: "No message supplied." });
    const response = await client.chat.completions.create({ model: "gpt-5-mini", messages: [{ role: "system", content: SYSTEM }, ...safe] });
    res.json({ reply: response.choices?.[0]?.message?.content || "I didn't get a response." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error?.message || "AI request failed." });
  }
});

app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(port, () => console.log(`Aither AI running on http://localhost:${port}`));
