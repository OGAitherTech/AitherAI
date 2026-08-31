# Aither AI 🤖

Aither AI is a real conversational AI web app powered by **hosted inference through OpenRouter**. The language model does not run on the user's device, and users do not need to install a local model.

## ✨ Features

- 🧠 Real large-language-model chat
- 🌐 Hosted AI inference through OpenRouter
- 🆓 Defaults to OpenRouter's free-model router
- 🔐 API credentials stay on the server
- 💬 Conversation history in the browser
- 🎤 Voice input when supported by the browser
- 🔊 Optional voice responses
- 📱 Responsive desktop and mobile interface
- 🛡️ Server-side validation and error handling
- 🚫 No Hugging Face
- 🚫 No Ollama
- 🚫 No OpenAI SDK

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
│   ├── index.html
│   ├── app.js
│   └── style.css
├── server.js        # Express server + OpenRouter bridge
├── package.json
└── README.md
```

## 📌 Version

**2.3.0 — No-Hugging-Face hosted AI**

### What's new in 2.3.0

- Removed Hugging Face completely from the server integration
- Removed all `HF_TOKEN` configuration and references
- Uses OpenRouter for hosted inference
- Uses `openrouter/free` by default
- Keeps the AI hosted rather than running locally
- Keeps the provider credential server-side
- Updated setup, architecture, security, and privacy documentation
