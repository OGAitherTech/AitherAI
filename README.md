# Aither AI 🤖

Aither AI is a real web-based AI chat app with a polished responsive interface, browser chat history, direct hosted AI inference, and a working Settings panel.

## Version 3.4.1

### ⚙️ Settings fix
- Fixed the Settings modal not appearing
- Added explicit modal visibility rules so `hidden` cannot be overridden by CSS
- Kept Force Update, API-key, and Clear Chats controls working
- Improved mobile Settings presentation

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

**Important:** a key placed in GitHub Pages source code is public. Anyone can inspect the page and copy the key. For a public repository, use a server-side secret/proxy if the key must remain private.

## 🌐 GitHub Pages

The root `index.html` is the GitHub Pages entrypoint and loads `./style.css`.

## 📖 Changelog

**3.4.1 — Settings Fix**
- Fixed Settings modal visibility
- Improved mobile Settings layout
- Updated README

**3.4.0 — Settings & Force Update**
- Added Settings panel
- Added Force Update button
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
