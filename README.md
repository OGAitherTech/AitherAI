# Aither AI 🤖

Aither AI is a real hosted AI chat app designed to work like a normal chat service: **users do not enter an API key**.

## Version 3.5.2

### ✨ AI chat fixes
- Chat now safely reads JSON or plain error responses from the backend
- Gives a useful message when GitHub Pages cannot reach `/api/chat`
- Removed the confusing generic "invalid response" message
- Keeps the private API key on the backend
- Keeps the `openrouter/free` route

### 📱 Mobile fixes
- Added a real mobile sidebar backdrop
- Added a dedicated sidebar close button
- Tapping outside the sidebar closes it
- The menu button now toggles the sidebar open/closed
- New Chat and chat-history buttons close the sidebar automatically
- Escape closes the sidebar
- Improved mobile sidebar layering and touch behavior

### ⚙️ Settings
- Force Update
- Clear Chats
- Server/API-key status
- Current version display

## 🔐 API key architecture

The **user does not need an API key**.

Aither AI's server uses the private `OPENROUTER_API_KEY` environment variable. The secret is never placed in browser JavaScript.

```text
OPENROUTER_API_KEY=your_key_here
```

Do **not** commit the real key to GitHub. A secret in a public GitHub Pages file is not hidden.

### GitHub Pages note

GitHub Pages is static hosting and cannot securely run `server.js` or hide a server secret by itself. The Pages frontend uses `/api/chat`, so the Aither AI backend must be deployed separately (or behind a compatible proxy) and configured with your private key.

## 🌐 Hosted AI

Default model route:

`openrouter/free`

The model can be changed on the server with:

`AITHER_MODEL`

## 📖 Changelog

**3.5.2 — AI & Mobile Reliability**
- Fixed invalid-response handling
- Added a clear backend-not-connected error
- Added working mobile sidebar close behavior
- Added sidebar backdrop
- Added Escape-key closing
- Updated mobile layering
- Updated README

**3.5.1 — Secure Hosted AI**
- Hardened server-side API-key handling
- Added request-size protection
- Added message validation and trimming
- Improved server security headers
- Improved AI system prompt
- Improved error handling
- Updated README

**3.5.0 — No-Key User Experience**
- Removed the client-side API-key requirement
- Added server endpoint usage for chat
- Moved the provider secret to `OPENROUTER_API_KEY`
- Fixed the server credential configuration
- Updated Settings to show no-key AI access
- Updated README

**3.4.3 — Mobile Upgrade**
- Optimized the complete interface for mobile
- Added mobile sidebar behavior
- Improved touch targets and mobile scrolling
- Added iPhone safe-area handling
- Improved mobile Settings layout
- Added small-screen support
- Added reduced-motion support
- Updated README
