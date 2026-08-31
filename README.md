# Aither AI 🤖

Aither AI is a real web-based AI chat app designed to open directly as Aither AI, with a complete chat interface and responsive styling.

## 🌐 GitHub Pages

The root `index.html` is the GitHub Pages entrypoint and now explicitly loads the root `style.css` with a relative path:

```html
<link rel="stylesheet" href="./style.css">
```

This makes the stylesheet work correctly when GitHub Pages serves the project from a repository subpath such as `/AitherAI/`.

## 💬 Interface

- 🤖 Aither AI branding
- 🗂️ Sidebar with chat history
- ➕ New chat
- 👋 Aither AI welcome screen
- 💬 Chat bubbles
- 📝 Message composer
- 🔑 OpenRouter key control
- 📱 Mobile-responsive sidebar
- ✨ Modern gradients, spacing, animations, and controls

## 🧠 AI

The GitHub Pages build connects directly to OpenRouter and uses `openrouter/free`.

It does not use Hugging Face, Ollama, a local model, or the OpenAI SDK.

## 🔑 API key

GitHub Pages cannot securely hide an API key. The Pages version asks for an OpenRouter key and keeps it only in the browser session. Never commit a key to the repository.

## 🚀 Pages deployment

The repository includes `.github/workflows/pages.yml`. Enable **Settings → Pages → GitHub Actions** and open the generated Pages URL.

## 📁 Project

```text
AitherAI/
├── index.html          # GitHub Pages entrypoint
├── style.css           # GitHub Pages stylesheet
├── public/
│   ├── index.html
│   ├── app.js
│   └── style.css
├── .github/workflows/
│   └── pages.yml
├── server.js
├── render.yaml
├── package.json
└── README.md
```

## 📌 Version

**2.9.1 — Connected GitHub Pages CSS**

### What's new in 2.9.1

- Added the missing root `style.css` used by GitHub Pages
- Confirmed root `index.html` uses `./style.css`
- Added complete sidebar styling
- Added responsive mobile sidebar styling
- Added Aither AI branding and chat styling
- Updated README with this CSS connection fix
