# Aither AI 🤖

Aither AI is a real hosted AI chat app designed to work like a normal chat service: **users do not enter an API key**.

## Version 3.5.0

### ✨ AI chat upgrade
- Removed the API-key prompt from the user interface
- Chat requests now use Aither AI's `/api/chat` server endpoint
- The provider credential is kept server-side in `OPENROUTER_API_KEY`
- Users never need to paste an OpenRouter key into the website
- Improved AI access status in Settings
- Kept browser conversation history and mobile support
- Kept Force Update and Clear Chats

### 📱 Mobile
- Responsive phone layout
- Touch-friendly controls
- Mobile sidebar
- iPhone safe-area support
- Mobile-friendly Settings sheet

## 🔐 API key architecture

The **user does not need an API key**.

Aither AI's server uses the private `OPENROUTER_API_KEY` environment variable. The secret is never placed in `index.html`, `style.css`, or browser JavaScript.

For a public GitHub Pages-only deployment, a private server cannot be bundled into the Pages site. The `/api/chat` endpoint therefore needs to be hosted by the Aither AI server (or another compatible backend). GitHub Pages by itself cannot securely provide hosted AI inference without exposing a credential or using an external backend.

**Never commit an API key to GitHub.**

## 🌐 Hosted AI

Default model route:

`openrouter/free`

The model can be changed on the server with:

`AITHER_MODEL`

## ⚙️ Settings

- Force Update
- Clear Chats
- AI access status
- Current version display

## 📖 Changelog

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

**3.4.2 — Settings Reliability**
- Rebuilt Settings event handling with direct listeners
- Added reliable close behavior
- Added outside-click and Escape-key closing
- Added explicit button types
- Updated README
