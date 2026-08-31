# Aither AI 🤖

Aither AI is a real web-based AI chat app with a polished responsive interface, browser chat history, direct hosted AI inference, and a built-in Settings panel.

## Version 3.4.0

### ⚙️ Settings
- Added a Settings panel
- Added a **Force update** button
- Force update reloads the app with a cache-busting query so GitHub Pages fetches the newest page assets
- Added API-key controls
- Added Clear chats control
- Shows the current Aither AI version

### 💬 Chat
- Full Aither AI chat interface
- Sidebar with saved conversations
- New Chat controls
- Mobile sidebar
- Loading and error states
- 30 saved conversations
- 12,000-character message limit

## 🔑 API key

A constant named `AITHER_API_KEY` is included near the top of the page script. If you put your OpenRouter key there, Aither AI will automatically use that key without asking the user for one.

**Important:** A key placed in GitHub Pages source code is public. Anyone can inspect the page and copy the key. For a public repository, use a server-side secret/proxy instead if the key must remain private.

If `AITHER_API_KEY` is empty, Aither AI falls back to the key entered through the key button and stores that fallback only in `sessionStorage`.

## 🌐 GitHub Pages

The root `index.html` is the GitHub Pages entrypoint and loads `./style.css`.

The Pages build connects directly to OpenRouter using the `openrouter/free` model route.

It does not use Hugging Face, Ollama, a local model, or the OpenAI SDK.

## 📖 Changelog

**3.4.0 — Settings & Force Update**
- Added Settings panel
- Added working Force Update button
- Added code-configured API key support
- Added Clear Chats button
- Added version display
- Updated README

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
