# Aither AI 🤖

Aither AI is a real web-based AI chat app with a polished responsive interface, browser chat history, and direct hosted AI inference.

## Version 3.3.0

### Chat upgrades
- Improved Aither AI chat startup experience
- Improved active conversation handling
- Better mobile sidebar behavior
- Cleaner conversation loading
- Improved composer interaction and focus states
- Better response loading state
- Better error recovery after failed requests
- Improved API-key update flow
- Browser-only conversation history
- Up to 30 saved conversations
- 12,000-character message limit
- README updated with every release change

## GitHub Pages

The root `index.html` is the GitHub Pages entrypoint and loads `./style.css`.

## AI

The Pages build connects directly to OpenRouter using the `openrouter/free` model route.

It does not use Hugging Face, Ollama, a local model, or the OpenAI SDK.

## API key

GitHub Pages cannot securely hide an API key. The Pages app asks for an OpenRouter key and stores it only in the browser session. Never commit API keys to GitHub.

## Privacy

Conversation history is stored in the browser's `localStorage`. The OpenRouter key is stored in `sessionStorage` and is not written into the repository.

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

**3.3.0 — Chat Polish Upgrade**

- Improved startup and conversation handling
- Improved mobile sidebar behavior
- Improved composer and loading states
- Improved error recovery
- Improved API-key flow
- Updated README

**3.2.0 — Chat Experience Upgrade**

- Upgraded conversation management
- Added reliable chat loading and switching
- Improved New Chat behavior
- Added a 30-chat history limit
- Added better loading, error, and empty-response handling
- Added input length protection
- Improved API-key update flow
- Updated README

**3.1.0 — Aither AI UI Upgrade**

- Upgraded the responsive chat interface
- Polished sidebar and history styling
- Improved composer interactions
- Added focus and hover states
- Improved mobile behavior
