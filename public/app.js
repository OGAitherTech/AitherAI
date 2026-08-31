const chat = document.querySelector('#chat');
const welcome = document.querySelector('#welcome');
const input = document.querySelector('#input');
const form = document.querySelector('#composer');
const clear = document.querySelector('#clear');
const mic = document.querySelector('#mic');
const theme = document.querySelector('#theme');
const storageKey = 'aither_messages';

let messages = JSON.parse(localStorage.getItem(storageKey) || '[]');
let dark = localStorage.getItem('aither_theme') !== 'light';

document.body.classList.toggle('light', !dark);
theme.textContent = dark ? '☀️' : '🌙';

const random = list => list[Math.floor(Math.random() * list.length)];
const clean = text => text.toLowerCase().replace(/[^a-z0-9+\-*/().% ]/g, ' ').replace(/\s+/g, ' ').trim();

const challenges = [
  'Build something in 15 minutes using only HTML and CSS. ⏱️',
  'Try to beat your fastest typing speed by 5 WPM. ⌨️',
  'Make a tiny game with one button. 🎮',
  'Draw a logo for Aither AI from memory. 🎨',
  'Write a 5-line story where every line starts with the same letter. ✍️'
];
const facts = [
  'Octopuses have three hearts. 🐙',
  'A day on Venus is longer than a Venusian year. 🪐',
  'Bananas are berries, botanically speaking. 🍌',
  'Honey can remain edible for an extremely long time when properly stored. 🍯',
  'The shortest war in recorded history lasted less than an hour. ⚔️'
];
const jokes = [
  'Why did the computer get cold? It left its Windows open. 😂',
  'Why was the JavaScript developer sad? Because they did not know how to null their feelings. 😭',
  'I told my computer I needed a break. Now it will not stop sending me KitKats. 🍫'
];

function localBrain(text) {
  const q = clean(text);
  if (/^(hi|hello|hey|yo|sup|hiya)\b/.test(q)) return random([
    "Hey! 👋 I'm Aither. What's up?",
    "Yo! 😎 Aither is online and ready.",
    "Hey there! ⚡ What are we building today?"
  ]);
  if (/who are you|what are you|tell me about yourself/.test(q)) return "I'm Aither AI 🤖 — a private, API-free assistant. This version uses a built-in local response engine, so your messages do not need to be sent to an AI provider.";
  if (/how are you|how r u/.test(q)) return "Running great! ⚡ No API key, no cloud AI, just local Aither energy. 😎";
  if (/joke|make me laugh|funny/.test(q)) return random(jokes);
  if (/fun fact|interesting fact|fact/.test(q)) return random(facts);
  if (/random challenge|challenge|dare me/.test(q)) return random(challenges);
  if (/weather/.test(q)) return "I can't see live weather in API-free mode 🌦️. If you give me a city and weather details, though, I can help explain them.";
  if (/help|what can you do/.test(q)) return "Try: **tell me a joke**, **give me a fun fact**, **give me a random challenge**, or ask me a simple question. I can also do basic calculations like `25 * 4`. 🧠";
  if (/thank|thanks|thx/.test(q)) return random(["You're welcome! 😎", "Anytime! ⚡", "No problem! 🤖"]);

  // Safe, simple calculator for arithmetic expressions.
  if (/^[0-9+\-*/().% ]+$/.test(q) && /[+\-*/%]/.test(q)) {
    try {
      const result = Function(`"use strict"; return (${q})`)();
      if (Number.isFinite(result)) return `The answer is **${result}**. 🧮`;
    } catch {}
  }

  if (q.endsWith('?')) return "I don't have a full language model running locally yet, so I may not know that one. 🧠 You can still ask me for jokes, facts, challenges, or calculations!";
  return random([
    "Interesting! 👀 Tell me more.",
    "I'm listening. 😎",
    "Hmm... that's something to think about. 🤔",
    "Aither says: noted. ⚡",
    "I can work with that! What should we do next? 🚀"
  ]);
}

function save() { localStorage.setItem(storageKey, JSON.stringify(messages)); }

function bubble(role, text) {
  const row = document.createElement('div');
  row.className = `msg ${role}`;
  const av = document.createElement('div');
  av.className = 'avatar';
  av.textContent = role === 'user' ? '🙂' : 'A';
  const b = document.createElement('div');
  b.className = 'bubble';
  b.textContent = text;
  row.append(av, b);
  chat.append(row);
}

function render() {
  chat.innerHTML = '';
  welcome.style.display = messages.length ? 'none' : 'block';
  messages.forEach(m => bubble(m.role, m.content));
  requestAnimationFrame(() => { chat.scrollTop = chat.scrollHeight; });
}

function resize() {
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 150) + 'px';
}

async function send(text) {
  text = text.trim();
  if (!text) return;
  messages.push({ role: 'user', content: text });
  save(); render(); input.value = ''; resize();
  const sendButton = form.querySelector('.send');
  sendButton.disabled = true;
  bubble('assistant', 'Thinking locally…');
  try {
    // The server endpoint is local-only and contains no external AI call.
    const response = await fetch('/api/chat', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages })
    });
    const data = await response.json();
    chat.lastElementChild?.remove();
    if (!response.ok) throw new Error(data.error || 'Local request failed.');
    messages.push({ role: 'assistant', content: data.reply });
    save(); render();
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      speechSynthesis.speak(new SpeechSynthesisUtterance(data.reply));
    }
  } catch (error) {
    chat.lastElementChild?.remove();
    // Fallback keeps Aither usable even if the local server endpoint fails.
    const fallback = localBrain(text);
    messages.push({ role: 'assistant', content: fallback });
    save(); render();
  } finally { sendButton.disabled = false; input.focus(); }
}

input.addEventListener('input', resize);
input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); }
});
form.addEventListener('submit', e => { e.preventDefault(); send(input.value); });

clear.onclick = () => { messages = []; save(); render(); input.focus(); };
theme.onclick = () => {
  dark = !dark;
  document.body.classList.toggle('light', !dark);
  theme.textContent = dark ? '☀️' : '🌙';
  localStorage.setItem('aither_theme', dark ? 'dark' : 'light');
};

document.querySelectorAll('.chips button').forEach(button => {
  button.onclick = () => send(button.dataset.prompt || button.textContent);
});

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (Recognition) {
  const rec = new Recognition();
  rec.lang = 'en-US';
  rec.interimResults = false;
  rec.onstart = () => { mic.textContent = '🔴'; };
  rec.onend = () => { mic.textContent = '🎤'; };
  rec.onresult = e => { input.value = e.results[0][0].transcript; resize(); input.focus(); };
  mic.onclick = () => { try { rec.start(); } catch {} };
} else {
  mic.onclick = () => alert('Voice input is not supported in this browser.');
}

render();
