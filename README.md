# Aither AI 🤖

Aither AI is a real browser-based AI chat app. **Users do not enter an API key, install Ollama, or configure a cloud AI provider.** The AI model runs directly in the browser with WebGPU.

## Version 4.0.0

### 🤖 Browser AI rebuild
- Replaced the hosted `/api/chat` requirement with in-browser AI inference
- Added WebLLM through an ESM CDN import
- Uses `Llama-3.2-1B-Instruct-q4f16_1-MLC` as the default model
- AI inference runs on the user's device through WebGPU
- No backend is required for chat
- No API key is requested or stored
- Added model loading progress
- Added a clear WebGPU compatibility message
- Conversations remain in browser `localStorage`

### 📱 Mobile
- Keeps the mobile sidebar
- Dedicated sidebar close button
- Tap-outside-to-close backdrop
- Touch-friendly controls
- Mobile-friendly Settings sheet
- iPhone safe-area support from the existing responsive stylesheet

### ⚙️ Settings
- Force Update
- Clear Chats
- Browser AI status
- Current version display

## 🔐 No API key

Aither AI 4.0.0 does **not** ask the user for an API key.

There is no OpenAI API dependency, no Ollama installation, and no hosted inference key in the frontend.

## 🧠 How the browser AI works

```text
GitHub Pages
     │
     ▼
Aither AI web app
     │
     ▼
WebLLM
     │
     ▼
WebGPU
     │
     ▼
Llama 3.2 1B model
     │
     ▼
Your browser / device
```

The model is downloaded the first time it is used and can be cached by the browser. Because inference happens on-device, performance depends on the phone or computer's WebGPU hardware.

WebLLM is specifically designed for in-browser inference without server support and uses WebGPU acceleration. citeturn0search5

## 🌐 GitHub Pages

Aither AI 4.0.0 is designed to work as a static GitHub Pages site. There is no `/api/chat` endpoint required for normal AI chat.

The page imports WebLLM from an ESM CDN, so the first visit needs an internet connection to load the runtime and model files. After the model is cached, later use can require less downloading depending on browser storage.

## 🌍 Browser support

WebGPU is required for the browser AI. Current WebLLM documentation lists Chrome/Edge 113+ and Safari 18+ as supported browser families. citeturn0search7

On iPhone, use a recent Safari/iOS version with WebGPU support. Older devices or browsers may not have enough GPU memory for the selected model.

## ⚠️ First launch

The first launch can take a while because the AI model has to download and initialize. Aither AI now shows loading progress instead of looking like the chat is broken.

The model is much smaller than many cloud-sized LLMs, but it still requires device memory and GPU resources.

## 🚫 Dependencies intentionally not used

- 🚫 Hugging Face Inference API
- 🚫 Ollama
- 🚫 OpenAI API
- 🚫 Anthropic API
- 🚫 Gemini API
- 🚫 User API keys
- 🚫 A required backend server

## 📖 Changelog

**4.0.0 — Browser AI Rebuild**
- Rebuilt Aither AI around in-browser WebLLM inference
- Removed the `/api/chat` requirement from the frontend
- Removed the user API-key flow
- Added WebGPU model initialization
- Added model download/loading progress
- Added WebGPU compatibility handling
- Kept local conversation history
- Kept mobile sidebar and Settings
- Kept Force Update
- Updated README

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
