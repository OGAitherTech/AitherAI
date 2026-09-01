# Aither AI 🤖

Aither AI is a real browser-based AI chat app. **Users do not enter an API key, install Ollama, or configure a cloud AI provider.** The AI model runs directly in the browser with WebGPU.

## Version 4.0.1

### 📥 AI model download progress
- Added a dedicated model download panel on first launch
- Shows live download percentage
- Shows a visual progress bar
- Shows the current download/loading status
- Estimates how much time is left while enough progress data is available
- Shows `Complete` when the model finishes loading
- Automatically hides the download panel shortly after the AI becomes ready
- Keeps the chat disabled until the model is ready

### 🤖 Browser AI
- Uses WebLLM with `Llama-3.2-1B-Instruct-q4f16_1-MLC`
- Runs AI inference directly on the user's device through WebGPU
- No backend is required for chat
- No API key is requested or stored
- No Hugging Face, Ollama, or OpenAI API dependency

### 📱 Mobile
- Mobile sidebar
- Dedicated sidebar close button
- Tap-outside-to-close backdrop
- Touch-friendly controls
- Mobile-friendly Settings sheet
- iPhone safe-area support
- Responsive download panel

### ⚙️ Settings
- Force Update
- Clear Chats
- Browser AI status
- Current version display

## 🔐 No API key

Aither AI does **not** ask users for an API key. The model runs locally in the browser using WebGPU.

## 🧠 How it works

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

The model is downloaded the first time it is needed. Aither AI displays the download percentage and an estimated time remaining while it loads. The browser may cache the model for later use.

## 🌐 GitHub Pages

Aither AI is designed to work as a static GitHub Pages site. Normal AI chat does not require `/api/chat` or a backend server.

The WebLLM runtime and model files are fetched when needed, so the first launch requires an internet connection. After caching, later launches may require little or no model downloading depending on browser storage.

## 🌍 Browser support

WebGPU is required. Use a recent browser/device with WebGPU support. On iPhone, use a recent Safari/iOS version. Older devices may not have enough GPU memory for the selected model.

## ⚠️ First launch

The first launch can take a while because the AI model must download and initialize. **Do not close or refresh the page while the download is running.** The progress bar shows how far the model has loaded and estimates the remaining time when enough data is available.

## 🚫 Dependencies intentionally not used

- 🚫 Hugging Face Inference API
- 🚫 Ollama
- 🚫 OpenAI API
- 🚫 Anthropic API
- 🚫 Gemini API
- 🚫 User API keys
- 🚫 Required backend server

## 📖 Changelog

**4.0.1 — Model Download Progress**
- Added download percentage
- Added visual download progress bar
- Added estimated time remaining
- Added loading status text
- Added completion state
- Automatically hides the download panel after initialization
- Keeps chat disabled until the AI is ready
- Updated mobile download styling
- Updated README

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
