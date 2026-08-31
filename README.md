# Aither AI 🤖

Aither AI is a **real web-based AI chat app**. It has a browser chat interface, a Node/Express backend, and hosted AI inference through OpenRouter.

It is not a text file or a preset-response demo. When deployed and configured, messages are sent to the Aither server and answered by a hosted language model.

## 💬 The actual app

- 💬 AI chat bubbles
- 🧠 Real hosted LLM responses
- 📚 Multiple saved conversations
- 🗂️ Chat history sidebar
- ➕ New chat
- 🏷️ Automatic conversation titles
- ⏳ AI typing indicator
- ⌨️ Enter to send / Shift+Enter for new lines
- 🎤 Voice input when supported
- 🔊 Voice responses
- 🌙 Dark/light mode
- 📱 Mobile and desktop layouts
- 💾 Browser chat persistence

## 🌐 How it works

```text
Phone / Computer browser
          │
          │ HTTPS
          ▼
     Aither AI website
          │
          │ POST /api/chat
          ▼
     Aither Node server
          │
          │ private API key
          ▼
       OpenRouter
          │
          ▼
    Hosted AI model
```

The AI model is hosted remotely. Users do not install Ollama, download a model, or put an AI key into the browser.

## 🚫 Not used

- ❌ Hugging Face
- ❌ Ollama
- ❌ Local AI model
- ❌ OpenAI SDK

## 🔑 Server setup

Create an OpenRouter API key and add it to your hosting provider as a secret named:

```text
OPENROUTER_API_KEY
```

Optional model setting:

```text
AITHER_MODEL=openrouter/free
```

Never place the key in `public/` or commit it to GitHub.

## 🚀 Deploy as an actual website

A `render.yaml` deployment configuration is included.

On Render:

1. Create a new Web Service from this GitHub repository.
2. Render reads `render.yaml` automatically.
3. Add your private `OPENROUTER_API_KEY` secret.
4. Deploy.
5. Open the generated website URL.

The result is a real Aither AI website that people can open in a browser and use as a chat app.

## 💻 Run for development

```bash
npm install
OPENROUTER_API_KEY=your_key npm start
```

Then open `http://localhost:3000`.

## 🤖 Default model

Aither uses `openrouter/free` by default. OpenRouter can route requests to an available free model. Availability and rate limits can change.

## 📡 Backend endpoints

### `GET /api/health`

Returns whether hosted AI is configured and identifies the provider/model.

### `POST /api/chat`

Sends the conversation to the configured hosted model and returns Aither's generated response.

## 📁 Project structure

```text
AitherAI/
├── public/
│   ├── index.html       # Actual browser chat UI
│   ├── app.js           # Chat application logic
│   └── style.css        # Chat UI styling
├── server.js            # Express + OpenRouter AI bridge
├── render.yaml          # Deployment configuration
├── package.json
└── README.md
```

## 📌 Version

**2.5.0 — Deployable AI Chat App**

### What's new in 2.5.0

- Added deployment configuration for Render
- Documented Aither as a complete web application
- Documented the browser → Aither server → OpenRouter architecture
- Clarified that the AI model is hosted remotely
- Added deployment instructions
- Kept the real chat UI, history, voice, themes, and hosted inference
- Updated the README with the complete application setup
