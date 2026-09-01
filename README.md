# Aither AI 🤖

Aither AI is a real browser-based AI chat app. **Users do not enter an API key, install Ollama, or configure a cloud AI provider.** The AI model runs directly in the browser with WebGPU.

## Version 4.1.0

### 🖥️ Desktop app
- Added an Electron desktop app in `desktop/`
- Windows NSIS installer target
- macOS DMG target
- Linux AppImage target
- Secure Electron context isolation and sandboxing
- Desktop app keeps the browser-based, no-API-key architecture

### 📥 AI model download progress
- Shows live download percentage
- Shows a visual progress bar
- Shows current loading status
- Estimates time remaining while enough progress data is available
- Shows completion state
- Chat stays disabled until the AI is ready

### 🤖 Browser AI
- Uses WebLLM with `Llama-3.2-1B-Instruct-q4f16_1-MLC`
- Runs AI inference directly on the device through WebGPU
- No API key is requested or stored
- No Hugging Face, Ollama, or OpenAI API dependency

## 🖥️ Build the desktop app

```bash
cd desktop
npm install
npm start
```

To build installers:

```bash
npm run build
```

Electron Builder creates platform-specific output in `desktop/dist/`.

## 📱 Mobile

- Mobile sidebar
- Dedicated sidebar close button
- Tap-outside-to-close backdrop
- Touch-friendly controls
- Mobile-friendly Settings sheet
- iPhone safe-area support
- Responsive download panel

## ⚙️ Settings

- Force Update
- Clear Chats
- Browser AI status
- Current version display

## 🔐 No API key

Aither AI does **not** ask users for an API key. The model runs locally in the browser or desktop app using WebGPU.

## 🧠 How it works

```text
Aither AI Web / Desktop
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
    User's device
```

The model is downloaded the first time it is needed. Aither AI displays the download percentage and an estimated time remaining while it loads. The browser or desktop app may cache the model for later use.

## 🌐 GitHub Pages

The web version is designed to work as a static GitHub Pages site. Normal AI chat does not require `/api/chat` or a backend server.

## 🌍 Browser/Desktop support

WebGPU is required for the browser AI engine. Use a recent browser or desktop GPU/driver with WebGPU support. Older devices may not have enough GPU memory for the selected model.

## 📖 Changelog

**4.1.0 — Desktop App**
- Added Electron desktop app
- Added Windows NSIS, macOS DMG, and Linux AppImage targets
- Added secure preload bridge
- Added sandboxed/context-isolated Electron configuration
- Added desktop build instructions
- Updated README

**4.0.1 — Model Download Progress**
- Added download percentage
- Added visual download progress bar
- Added estimated time remaining
- Added loading status text
- Added completion state
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
