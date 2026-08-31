# Aither AI 🤖

Aither AI is a real conversational AI web app. The language model runs through **hosted inference**, so users do not install Ollama, download a model, or run the AI model on their own device.

## ✨ Features

- 🧠 Real large-language-model chat
- 🌐 Hosted AI inference
- 🔐 Provider credentials stay on the server and never enter the browser
- 💬 Conversation history in the browser
- 🎤 Voice input when supported by the browser
- 🔊 Optional voice responses
- 📱 Responsive desktop and mobile interface
- 🛡️ Server-side validation and error handling
- 🚫 No OpenAI, Anthropic, Gemini, or Ollama dependency

## 🏗️ Architecture

```text
Your browser
    │
    │ HTTPS /api/chat
    ▼
Aither AI server
    │
    │ private HF_TOKEN
    ▼
Hugging Face Inference Providers
    │
    ▼
Hosted open-weight AI model
```

The browser never receives the provider credential. The Aither server makes the inference request, keeping the secret out of client-side JavaScript.

## 🤖 Current model

The default hosted model is:

`openai/gpt-oss-120b:fastest`

You can change it with the `AITHER_MODEL` environment variable. Hugging Face supports automatic provider selection with model policies such as `:fastest`, `:cheapest`, and `:preferred`.

## 🔑 Server configuration

Aither requires one private server environment variable:

```bash
HF_TOKEN=your_hugging_face_token
```

The token needs permission to make Inference Provider calls. **Never put `HF_TOKEN` in `public/` or client-side JavaScript.**

The person using the Aither website does **not** need an AI API key.

## 🚀 Run

```bash
npm install
HF_TOKEN=your_token npm start
```

Then open `http://localhost:3000`.

For production, set `HF_TOKEN` in your hosting provider's secret/environment-variable settings rather than committing it to GitHub.

## 🔐 Privacy & security

Aither's frontend does not contain the hosted provider token. Chat requests go from the Aither server to the configured inference provider. The browser keeps its own conversation history in `localStorage`.

Never commit `.env`, access tokens, or other credentials to this repository.

## 📡 API endpoints

### `GET /api/health`

Reports whether hosted AI is configured and identifies the configured model.

### `POST /api/chat`

Accepts a JSON body containing a `messages` array with `user` and `assistant` messages and returns the generated assistant response.

## 📁 Project structure

```text
AitherAI/
├── public/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── server.js        # Express server + hosted AI bridge
├── package.json
└── README.md
```

## 📌 Version

**2.1.0 — Hosted AI rebuild**

### What's new in 2.1.0

- Replaced the preset-response engine with real hosted LLM inference
- Removed Ollama from the backend
- Removed the Ollama npm dependency
- Added server-side Hugging Face Inference Providers integration
- Added private `HF_TOKEN` configuration
- Added hosted-model configuration through `AITHER_MODEL`
- Updated `/api/health` for hosted mode
- Improved inference error handling
- Updated architecture, setup, security, and privacy documentation
