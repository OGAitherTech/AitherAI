# Aither AI 🤖

Aither AI is a **real web-based AI chat app**. When the site is opened, users see the complete chat interface immediately — not a text document or README-style page.

The browser talks to the Aither Node/Express server, which sends chat messages to OpenRouter for hosted AI inference.

## 💬 What opens when you visit Aither

- 🤖 Aither AI header and online status
- 💬 Full chat area
- 👋 Welcome screen with starter prompts
- 📝 Message composer
- ➤ Send button
- 🎤 Voice input
- 📚 Conversation history
- ➕ New chat
- 🌙 Dark/light theme
- ⏳ AI typing indicator
- 📱 Responsive phone and desktop UI

## 🌐 Architecture

```text
Browser
  ↓
Aither AI web interface
  ↓ POST /api/chat
Aither Node/Express server
  ↓
OpenRouter
  ↓
Hosted AI model
```

The AI model is hosted remotely. Users do not install a model or Ollama, and the provider key is never placed in the browser.

## 🚫 Not used

- ❌ Hugging Face
- ❌ Ollama
- ❌ Local AI model
- ❌ OpenAI SDK

## 🔑 Server configuration

Set this private environment variable on the server/hosting provider:

```text
OPENROUTER_API_KEY=your_openrouter_key
```

Optional:

```text
AITHER_MODEL=openrouter/free
```

Never put the key in `public/` or commit it to GitHub.

## 🚀 Deploy

A `render.yaml` file is included for deployment on Render.

1. Create a Web Service from this repository.
2. Let Render use the included `render.yaml`.
3. Add `OPENROUTER_API_KEY` as a private environment variable.
4. Deploy.
5. Open the generated website URL — the actual Aither chat UI appears immediately.

## 💻 Development

```bash
npm install
OPENROUTER_API_KEY=your_key npm start
```

Open `http://localhost:3000`.

## 🤖 Default model

`openrouter/free`

OpenRouter routes requests to an available free model. Availability and rate limits can change.

## 📡 API

`GET /api/health` — hosted AI status.

`POST /api/chat` — sends the conversation to the hosted model and returns Aither's response.

## 📁 Project

```text
AitherAI/
├── public/
│   ├── index.html       # Complete first-open chat page
│   ├── app.js           # Chat application logic
│   └── style.css        # Chat styling
├── server.js            # Hosted AI backend
├── render.yaml          # Deployment configuration
├── package.json
└── README.md
```

## 📌 Version

**2.6.0 — Complete First-Open Chat UI**

### What's new in 2.6.0

- Rebuilt `index.html` as the complete first-open Aither AI experience
- Added a polished welcome screen and starter prompts
- Added dedicated message composer and send controls
- Added full sidebar/history structure
- Added hosted-AI online indicator
- Added mobile navigation controls
- Kept real hosted AI chat through OpenRouter
- Updated README to document the actual first-open website experience
