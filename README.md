# Aither AI 🤖

Aither AI is a private AI assistant designed to run **locally with no external AI API or API key**.

## 🧠 Real local AI

Aither now uses **Ollama** to run an actual open-source language model on the same computer as the app. The server sends chat messages to Ollama's local runtime instead of OpenAI, Anthropic, Gemini, or another remote AI provider. Ollama provides a JavaScript library for local model integration. citeturn0search9

The default model is `llama3.2:3b`, but you can change it with the `AITHER_MODEL` environment variable. The model must be installed in Ollama first.

## ✨ Features

- 🧠 Real local language-model chat
- 🔒 No OpenAI/Anthropic/Gemini API key
- 💻 Inference through local Ollama
- 💬 Conversation history in browser storage
- 🎤 Voice input when supported by the browser
- 🔊 Optional voice responses
- 🌙 Dark/light theme
- ⌨️ Enter to send, Shift+Enter for a new line
- 📱 Responsive desktop and mobile UI
- ❤️ Local health/status endpoint
- 📋 Local model listing endpoint
- ⚡ Configurable local model

## 🚀 Setup

### 1. Install Ollama

Install Ollama for your computer, then make sure the Ollama app/service is running.

### 2. Download a model

For the default Aither configuration:

```bash
ollama pull llama3.2:3b
```

### 3. Install Aither

```bash
npm install
```

### 4. Start Aither

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## 🔧 Choose another model

Set `AITHER_MODEL` before starting Aither. For example:

```bash
AITHER_MODEL=llama3.2:3b npm start
```

Ollama supports many local models. For example, Llama 3 models can be run locally through Ollama. citeturn0search5

## 🔐 Privacy

Aither's chat request is sent to the **local Ollama service** running on the computer. Aither itself does not require a remote AI API key. Do not use Ollama cloud models if your goal is strictly offline/local inference; Ollama documents that its cloud models use remote compute. citeturn0search0

## 🩺 Status endpoints

Check whether the local model is available:

```text
GET /api/health
```

List models visible to Ollama:

```text
GET /api/models
```

Chat with Aither:

```text
POST /api/chat
```

## 📁 Project structure

```text
AitherAI/
├── public/
│   ├── index.html   # App interface
│   ├── app.js       # Chat UI, history, voice, themes
│   └── style.css    # Responsive styling
├── server.js        # Express server + Ollama local AI bridge
├── package.json     # Project configuration
└── README.md        # Documentation
```

## 📌 Version

**2.0.0 — Real Local AI**

### What's new in 2.0.0

- Replaced the preset JavaScript response system with a real local language model
- Added Ollama integration
- Added configurable model selection through `AITHER_MODEL`
- Added `/api/models` for local model discovery
- Improved `/api/health` to report Ollama/model availability
- Added clearer local-model error messages
- Kept the project free of OpenAI/Anthropic/Gemini API dependencies
- Updated setup and privacy documentation
