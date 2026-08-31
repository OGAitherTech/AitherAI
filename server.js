import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));
app.use(express.static(path.join(__dirname, "public")));

// Aither AI local mode: no API key and no external AI service required.
const replies = [
  { test: /^(hi|hello|hey|yo)\b/i, reply: "Hey! 👋 I'm Aither AI. I'm running completely locally — no API required." },
  { test: /who are you|what are you/i, reply: "I'm Aither AI! 🤖 A lightweight local AI assistant that works without an API key." },
  { test: /joke/i, reply: "Why did the computer go to the doctor? Because it had a virus. 🦠😂" },
  { test: /weather/i, reply: "I can't access live weather without an external service, but I can still chat with you locally! ☁️" },
  { test: /help/i, reply: "Try asking me for a joke, a random challenge, a fun fact, or just start chatting! 🚀" }
];

function localReply(text) {
  const match = replies.find(item => item.test.test(text));
  if (match) return match.reply;
  const responses = [
    "Interesting! 👀 Tell me more.",
    "Okay, I'm listening! 😎",
    "That's a good one. Let's think about it! 🧠",
    "I'm Aither, running 100% locally — and I'm ready! ⚡",
    "Hmm... you might be onto something. 🤔"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

app.get("/api/health", (_req, res) => res.json({ ok: true, configured: true, mode: "local" }));

app.post("/api/chat", (req, res) => {
  try {
    const messages = Array.isArray(req.body.messages) ? req.body.messages : [];
    const last = messages.filter(m => m && m.role === "user" && typeof m.content === "string").at(-1);
    if (!last?.content.trim()) return res.status(400).json({ error: "No message supplied." });
    res.json({ reply: localReply(last.content.trim()) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Local AI request failed." });
  }
});

app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));
app.listen(port, () => console.log(`Aither AI local mode running on http://localhost:${port}`));
