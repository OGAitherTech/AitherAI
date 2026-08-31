# Aither AI 🤖

Aither AI is a lightweight AI-style assistant that runs in **local mode without an API key**.

## Current features

- 💬 Chat interface
- 💾 Local chat history using browser storage
- 🎤 Voice input when supported by the browser
- 🔊 Voice responses when supported by the browser
- ⚡ Local responses with no OpenAI API required
- ❤️ Health endpoint at `/api/health`
- 📱 Responsive interface for desktop and mobile

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## No API keys

Aither AI does **not** require an OpenAI API key or `.env` file in its current local mode.

## Project structure

```text
AitherAI/
├── public/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── server.js
├── package.json
└── README.md
```

## Important

The current local mode uses built-in response logic rather than a remote large language model. Future versions can add a local open-source model if desired, while keeping the project API-free.
