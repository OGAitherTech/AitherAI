# Aither AI 🤖

Aither AI is a real conversational AI web app. The language model runs through **hosted inference**, so users do not install Ollama, download a model, or run the AI model on their own device.

## ✨ Features

- 🧠 Real large-language-model chat
- 🌐 Hosted AI inference through OpenRouter
- 🆓 Defaults to OpenRouter's free-model router
- 🔐 Provider credentials stay on the server and never enter the browser
- 💬 Conversation history in the browser
- 🎤 Voice input when supported by the browser
- 🔊 Optional voice responses
- 📱 Responsive desktop and mobile interface
- 🛡️ Server-side validation and error handling
- 🚫 No Hugging Face dependency
- 🚫 No Ollama dependency
- 🚫 No OpenAI SDK dependency

## 🏗️ Architecture

```text
Your browser
    │
    │ HTTPS /api/chat
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

OpenRouter's Free Models Router automatically selects an available free model that matches the request. Free-model availability can change over time, and free models have lower rate limits than paid models.

You can choose another OpenRouter model with the `AITHER_MODEL` environment variable.

## 🔑 Server configuration

Aither requires one private server environment variable:

```bash
OPENROUTER_API_KEY=your_openrouter_key
```

The person using the Aither website does **not** need an AI API key. The key belongs only on the server.

**Never put `OPENROUTER_API_KEY` in `public/` or client-side JavaScript.**

## 🚀 Run

```bash
npm install
OPENROUTER_API_KEY=your_key npm start
```

Then open:

```text
http://localhost:3000
```

For production, set `OPENROUTER_API_KEY` in your hosting provider's secret/environment-variable settings rather than committing it to GitHub.

## 🔄 Choose another model

Set `AITHER_MODEL` before starting Aither. For example:

```bash
AITHER_MODEL=openai/gpt-5 npm start
```

OpenRouter provides a unified API for many models and also supports automatic model fallbacks. Check the current model catalog before selecting a specific model.

## 🔐 Privacy & security

Aither's frontend does not contain the hosted provider token. Chat requests go from the Aither server to OpenRouter. The browser keeps its own conversation history in `localStorage`.

OpenRouter's free-model router can route requests to different free models, and availability/rate limits can change. Do not send sensitive information unless you are comfortable with the policies of the selected model/provider.

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
├── server.js        # Express server + OpenRouter hosted AI bridge
├── package.json
└── README.md
```

## 📌 Version

**2.2.0 — OpenRouter hosted AI**

### What's new in 2.2.0

- Replaced Hugging Face inference with OpenRouter
- Removed all Hugging Face configuration and references
- Added private `OPENROUTER_API_KEY` server configuration
- Changed the default model to `openrouter/free`
- Kept inference hosted instead of running on the user's device
- Kept provider credentials out of the browser
- Updated `/api/health` for OpenRouter
- Improved hosted inference error handling
- Updated architecture, setup, security, and privacy documentation
