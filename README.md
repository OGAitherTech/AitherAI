# Aither AI 🤖

Aither AI is a real hosted AI chat app designed to work like a normal chat service: **users do not enter an API key**.

## Version 3.5.1

### ✨ Better hosted AI
- Kept the API key completely out of the browser
- Server reads the private `OPENROUTER_API_KEY` environment variable
- Added safer request validation and message trimming
- Added a lightweight 1 MB JSON request limit
- Disabled Express's `X-Powered-By` header
- Improved the Aither AI system prompt
- Improved hosted-service error handling
- Kept the `openrouter/free` route for low-cost/free-provider routing

### 📱 Mobile
- Responsive phone layout
- Touch-friendly controls
- Mobile sidebar
- iPhone safe-area support
- Mobile-friendly Settings sheet

### ⚙️ Settings
- Force Update
- Clear Chats
- AI access status
- Current version display

## 🔐 API key architecture

The **user does not need an API key**.

Aither AI's server uses the private `OPENROUTER_API_KEY` environment variable. The secret is never placed in `index.html`, `style.css`, or browser JavaScript.

If you already have your OpenRouter key, put it into the **environment/secrets settings of the service hosting `server.js`** as:

```text
OPENROUTER_API_KEY=your_key_here
```

Do **not** paste the real key into GitHub source code. I will not put a private API key into the repository because anything committed to a public GitHub repository can be exposed.

### GitHub Pages note

GitHub Pages is static hosting. It cannot securely run `server.js` or hide a server secret by itself. The Pages frontend can point to a separately hosted Aither AI backend, but the backend must hold the key privately.

## 🌐 Hosted AI

Default model route:

`openrouter/free`

The model can be changed on the server with:

`AITHER_MODEL`

## 📖 Changelog

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
