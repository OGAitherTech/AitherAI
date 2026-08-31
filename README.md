# Aither AI 🤖

Aither AI is a real web-based AI chat app with a polished responsive interface, browser chat history, direct hosted AI inference, and a working Settings panel.

## Version 3.4.3

### 📱 Mobile upgrade
- Optimized the entire chat interface for phones and small screens
- Added a mobile hamburger menu for the sidebar
- Made the sidebar slide in and out on mobile
- Improved touch-friendly button sizes
- Added iPhone-safe-area support around the composer
- Improved mobile message bubble sizing and wrapping
- Kept the message box compatible with the mobile keyboard
- Added a mobile-friendly Settings modal that opens from the bottom
- Added support for very small screens
- Added reduced-motion support for accessibility

### ⚙️ Settings
- Settings panel
- Force Update button
- API-key controls
- Clear Chats control
- Current version display

### 💬 Chat
- Full Aither AI chat interface
- Sidebar with saved conversations
- New Chat controls
- Loading and error states
- 30 saved conversations
- 12,000-character message limit

## 🔑 API key

A constant named `AITHER_API_KEY` is included near the top of the page script. If you put your OpenRouter key there, Aither AI will automatically use that key without asking the user for one.

**Important:** a key placed in GitHub Pages source code is public. Anyone can inspect the page and copy the key. For a public repository, use a server-side secret/proxy if the key must remain private.

If `AITHER_API_KEY` is empty, Aither AI can use a key entered through the key button and keep that fallback in `sessionStorage`.

## 🌐 GitHub Pages

The root `index.html` is the GitHub Pages entrypoint and loads `./style.css`.

The Pages build connects directly to OpenRouter using the `openrouter/free` model route.

It does not use Hugging Face, Ollama, a local model, or the OpenAI SDK.

## 📖 Changelog

**3.4.3 — Mobile Upgrade**
- Optimized the complete interface for mobile
- Added mobile sidebar behavior
- Improved touch targets and mobile scrolling
- Added iPhone safe-area handling
- Improved mobile Settings layout
- Added small-screen support
- Added reduced-motion support
- Updated README

**3.4.2 — Settings Reliability**
- Rebuilt Settings event handling with direct listeners
- Added reliable close behavior
- Added outside-click and Escape-key closing
- Added explicit button types
- Updated README

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
