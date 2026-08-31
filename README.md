# Aither AI 🤖

Aither AI is a **real web-based AI chat app** that can run directly from **GitHub Pages**. The first page is the full chat UI — not a text document.

## 🌐 GitHub Pages version

The repository now includes a GitHub Actions Pages workflow. It publishes everything in `public/` as the website.

After GitHub Pages is enabled, use the Pages URL shown under **Settings → Pages**.

## 💬 What opens

- 🤖 Aither AI chat interface
- 💬 Real chat bubbles
- 👋 Welcome screen and starter prompts
- 📝 Message composer
- ➤ Send button
- 🔑 Connect OpenRouter key button
- 🎤 Voice input
- 📚 Conversation history
- ➕ New chat
- 🌙 Dark/light theme
- ⏳ AI typing indicator
- 📱 Responsive phone/desktop UI

## 🧠 AI connection

GitHub Pages cannot run the Node/Express backend, so this Pages build sends chat requests directly to OpenRouter.

The OpenRouter key is **not stored in this repository**. When you click 🔑, Aither asks for your key and keeps it only in the current browser session (`sessionStorage`).

This is the public/static approach requested. It is less secure than a server proxy because the browser must have access to the credential while making the request. Use a limited/revocable key and appropriate provider limits.

## 🚫 Not used

- ❌ Hugging Face
- ❌ Ollama
- ❌ Local AI model
- ❌ OpenAI SDK

## 🚀 GitHub Pages deployment

```text
.github/workflows/pages.yml
          ↓
      GitHub Actions
          ↓
   public/ → Pages
          ↓
   Aither AI website
          ↓
 OpenRouter hosted AI
```

To enable it:

1. Open the repository **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. The workflow deploys the site whenever `main` changes.
5. Open the Pages URL shown by GitHub.

## 🔑 Connecting AI

Click **🔑** in the Aither header and paste your OpenRouter key.

The key is held only for the current browser session. It is not written into `index.html`, `app.js`, GitHub, or the repository.

Aither calls:

```text
https://openrouter.ai/api/v1/chat/completions
```

with the default model:

```text
openrouter/free
```

## 🔐 Security warning

This GitHub-Pages-only version intentionally uses direct browser-to-provider requests. **Do not put a secret server key directly into the GitHub repository.** Anyone who can inspect the public webpage can inspect client-side requests.

For a production app where one shared secret is protected, use the Node/Express server version with a server-side environment variable instead.

## 📁 Project

```text
AitherAI/
├── public/
│   ├── index.html       # Complete first-open chat website
│   ├── app.js           # Browser chat + OpenRouter connection
│   └── style.css        # Chat styling
├── .github/workflows/
│   └── pages.yml        # GitHub Pages deployment
├── server.js            # Optional server deployment
├── render.yaml          # Optional Render deployment
├── package.json
└── README.md
```

## 📌 Version

**2.7.0 — GitHub Pages AI Chat**

### What's new in 2.7.0

- Added GitHub Actions deployment to GitHub Pages
- Made `public/` the actual Pages website
- Added direct hosted AI chat through OpenRouter
- Added 🔑 OpenRouter connection control
- Kept API keys out of GitHub source files
- Added session-only browser key storage
- Added GitHub Pages setup instructions
- Documented the security tradeoff of the public endpoint approach
- Updated the README with the new GitHub Pages architecture
