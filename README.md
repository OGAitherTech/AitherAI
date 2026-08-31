# Aither AI 🤖

Aither AI is a **real web-based AI chat app**. When the deployed site is opened, users see the complete chat interface immediately — not a text document or README-style page.

The browser talks to the Aither Node/Express server, which sends chat messages to OpenRouter for hosted AI inference.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy)

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

## 🚀 Deploy the actual website

The repository includes `render.yaml`, so the full Node/Express app can be deployed as a Render Web Service. Render supports deploying Express apps from GitHub and gives the service a public `onrender.com` URL. citeturn0search0turn0search1

### Fastest setup

1. Open the **Deploy to Render** button above.
2. Connect/authorize your GitHub account if Render asks.
3. Select `OGAitherTech/AitherAI`.
4. Use the included `render.yaml` configuration.
5. Set the private `OPENROUTER_API_KEY` environment variable.
6. Deploy the service.
7. Open the generated `https://...onrender.com` URL.

Render can automatically redeploy the service when changes are pushed to the connected GitHub branch. citeturn0search5

**Important:** GitHub's normal repository/file page is not the Aither website. GitHub Pages only serves static files and cannot run the Node/Express server needed by `/api/chat`; the full Aither app therefore needs the Web Service deployment. citeturn0search4turn0search1

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
- Added Render deployment configuration and instructions
- Kept real hosted AI chat through OpenRouter
- Updated README to document the actual first-open website and deployment path
