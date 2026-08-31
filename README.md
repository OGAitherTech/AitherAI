# Aither AI 🤖

Aither AI is a real conversational AI web app powered by **hosted inference through OpenRouter**. The language model does not run on the user's device, and users do not install a local model.

## ✨ Chat features

- 🧠 Real large-language-model chat
- 💬 ChatGPT-style conversation bubbles
- 📚 Multiple conversations with a chat history sidebar
- ➕ New chat controls
- 🏷️ Automatic chat titles from the first message
- ⌨️ Enter to send, Shift+Enter for a new line
- ⏳ Animated AI typing indicator
- 🎤 Voice input when supported by the browser
- 🔊 Optional voice responses
- 🌙 Dark/light theme
- 📱 Responsive desktop and mobile layout
- 💾 Conversations saved in browser `localStorage`
- 🆓 Defaults to OpenRouter's free-model router
- 🔐 API credentials stay on the server
- 🛡️ Server-side validation and error handling

## 🚫 What Aither does not use

- ❌ Hugging Face
- ❌ Ollama
- ❌ A local AI model
- ❌ OpenAI SDK

## 🏗️ Architecture

```text
Your browser
    │
    │ /api/chat
    ▼
Aither AI server
    │
    │ private OPENROUTER_API_KEY
    ▼
OpenRouter
    │
    ▼
Hosted AI model
```

The browser never receives the provider credential. The Aither server makes the inference request, keeping the secret out of client-side JavaScript.

## 🤖 Current model

The default model is:

`openrouter/free`

This is OpenRouter's free-model router. It can select an available free model automatically. Availability and rate limits can change over time.

You can choose another OpenRouter model with the `AITHER_MODEL` environment variable.

## 🔑 Server configuration

Aither requires one private server environment variable:

```bash
OPENROUTER_API_KEY=your_openrouter_key
```

The person using the Aither website does **not** need their own AI API key.

**Never put `OPENROUTER_API_KEY` in `public/` or client-side JavaScript.**

## 🚀 Run

```bash
npm install
OPENROUTER_API_KEY=your_key npm start
```

Then open `http://localhost:3000`.

For production, configure `OPENROUTER_API_KEY` as a secret/environment variable on your hosting provider. Never commit it to GitHub.

## 🔄 Choose another model

Set `AITHER_MODEL` before starting Aither. For example:

```bash
AITHER_MODEL=openai/gpt-oss-120b npm start
```

Check OpenRouter's current model catalog for available model IDs.

## 🔐 Privacy & security

Aither's frontend does not contain the provider token. Chat requests go from the Aither server to OpenRouter. Browser conversation history is stored in `localStorage`.

Never commit `.env`, access tokens, or other credentials to this repository.

## 📡 API endpoints

### `GET /api/health`

Reports whether hosted AI is configured, the provider, and the configured model.

### `POST /api/chat`

Accepts a JSON body containing a `messages` array with `user` and `assistant` messages and returns the generated assistant response.

## 📁 Project structure

```text
AitherAI/
├── public/
│   ├── index.html     # Chat interface
│   ├── app.js         # Chat, history, voice, and UI logic
│   └── style.css      # Responsive chat design
├── server.js          # Express + OpenRouter bridge
├── package.json
└── README.md
```

## 📌 Version

**2.4.0 — Full AI Chat Experience**

### What's new in 2.4.0

- Rebuilt the frontend as a dedicated AI chat interface
- Added ChatGPT-style message bubbles and sender labels
- Added persistent multi-chat history
- Added automatic conversation titles
- Added new-chat controls
- Added mobile chat sidebar
- Added animated AI typing indicator
- Improved composer and mobile responsiveness
- Added Shift+Enter multiline messaging
- Kept voice input and voice responses
- Kept dark/light themes
- Updated project structure and feature documentation
