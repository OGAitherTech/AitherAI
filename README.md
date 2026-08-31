# Aither AI 🤖

Aither AI is a real web-based AI chat app with a full responsive interface.

## Version 3.1.0

### Interface upgrades
- Full Aither AI sidebar and chat history
- New Chat controls
- Responsive mobile sidebar
- Polished message bubbles and composer
- Composer focus and hover effects
- Improved Aither AI branding
- Auto-growing message box

## GitHub Pages

The root `index.html` is the GitHub Pages entrypoint and loads the root `style.css` using `./style.css`.

## AI

The Pages build connects directly to OpenRouter using `openrouter/free`.

It does not use Hugging Face, Ollama, a local model, or the OpenAI SDK.

## API key

GitHub Pages cannot securely hide an API key. The Pages app asks for an OpenRouter key and stores it only in the browser session. Never commit API keys to GitHub.

## Project

```text
AitherAI/
├── index.html
├── style.css
├── public/
├── .github/workflows/pages.yml
├── server.js
├── render.yaml
├── package.json
└── README.md
```

## Changelog

**3.1.0 — Aither AI UI Upgrade**

- Upgraded the responsive chat interface
- Polished sidebar and history styling
- Improved composer interactions
- Added focus and hover states
- Improved mobile behavior
- Updated README for this release
