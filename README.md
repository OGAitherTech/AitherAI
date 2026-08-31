# Aither AI 🤖

Aither AI is a lightweight, private AI-style assistant designed to run **without an external AI API or API key**.

## ✨ Features

- 💬 Chat interface with persistent local history
- 🧠 Built-in local response engine
- 🧮 Basic arithmetic calculations
- 😂 Built-in jokes
- 💡 Built-in fun facts
- 🎮 Random challenges
- 🎤 Voice input when supported by the browser
- 🔊 Optional voice responses
- 🌙 Dark/light theme toggle
- ⌨️ Enter to send, Shift+Enter for a new line
- 📱 Responsive desktop and mobile UI
- 🔒 No OpenAI API key, `.env` file, or remote AI provider required
- 🛟 Client-side fallback if the local server endpoint is unavailable

## 🚀 Run it

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## 🔐 Privacy

The current Aither AI engine does not send conversations to OpenAI or another external AI service. Chat history is stored in the browser's `localStorage`.

## 🧠 How the local AI works

Aither currently uses a built-in JavaScript response engine rather than a large language model. It recognizes common requests, provides built-in content, and can calculate simple arithmetic locally.

This keeps the project API-free while leaving room for a future **local open-source language model**.

## 📁 Project structure

```text
AitherAI/
├── public/
│   ├── index.html   # App interface
│   ├── app.js       # Chat UI, local features, voice, themes
│   └── style.css    # Responsive styling
├── server.js        # Local Express server and response endpoint
├── package.json     # Project configuration
└── README.md        # Documentation
```

## 📌 Current version

**1.2.0 — Local AI UI + response-engine upgrade**

### What's new

- Redesigned welcome screen and header
- Dark/light mode
- More local response types
- Calculator support
- More jokes, facts, and challenges
- Better mobile layout
- Enter-to-send keyboard behavior
- Improved voice controls
- Local fallback behavior
- Updated privacy and setup documentation
