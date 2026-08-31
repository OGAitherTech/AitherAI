const chat = document.querySelector('#chat');
const welcome = document.querySelector('#welcome');
const input = document.querySelector('#input');
const form = document.querySelector('#composer');
const clear = document.querySelector('#clear');
const mic = document.querySelector('#mic');
const theme = document.querySelector('#theme');
const history = document.querySelector('#history');
const sidebar = document.querySelector('#sidebar');
const menu = document.querySelector('#menu');
const closeSidebar = document.querySelector('#closeSidebar');
const newChatSide = document.querySelector('#newChatSide');
const keyButton = document.querySelector('#keyButton');

const chatsKey = 'aither_chats_v2';
const themeKey = 'aither_theme';
const keyKey = 'aither_openrouter_key';
let chats = JSON.parse(localStorage.getItem(chatsKey) || '[]');
let activeId = localStorage.getItem('aither_active') || null;
let dark = localStorage.getItem(themeKey) !== 'light';
let busy = false;

document.body.classList.toggle('light', !dark);
theme.textContent = dark ? '☀️' : '🌙';

function save() { localStorage.setItem(chatsKey, JSON.stringify(chats)); if (activeId) localStorage.setItem('aither_active', activeId); }
function active() { return chats.find(c => c.id === activeId); }
function newChat() { const c = { id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), title: 'New chat', messages: [] }; chats.unshift(c); activeId = c.id; save(); render(); renderHistory(); input.focus(); sidebar.classList.remove('open'); }
function ensureChat() { if (!active()) newChat(); return active(); }
function titleFor(text) { return text.trim().replace(/\s+/g, ' ').slice(0, 42) || 'New chat'; }
function getKey() { return sessionStorage.getItem(keyKey) || ''; }
function setKey() { const key = prompt('Paste your OpenRouter API key. It is stored only in this browser session and is never committed to GitHub.'); if (key?.trim()) { sessionStorage.setItem(keyKey, key.trim()); alert('Aither AI key connected for this browser session.'); } }

function bubble(role, text) { const row = document.createElement('div'); row.className = `msg ${role}`; const av = document.createElement('div'); av.className = 'avatar'; av.textContent = role === 'user' ? '🙂' : 'A'; const wrap = document.createElement('div'); wrap.className = 'message-wrap'; const name = document.createElement('div'); name.className = 'sender'; name.textContent = role === 'user' ? 'You' : 'Aither AI'; const b = document.createElement('div'); b.className = 'bubble'; b.textContent = text; wrap.append(name, b); row.append(av, wrap); chat.append(row); return row; }
function render() { const c = active(); chat.innerHTML = ''; const msgs = c?.messages || []; welcome.style.display = msgs.length ? 'none' : 'block'; msgs.forEach(m => bubble(m.role, m.content)); requestAnimationFrame(() => chat.scrollTo({ top: chat.scrollHeight, behavior: 'smooth' })); }
function renderHistory() { history.innerHTML = ''; chats.forEach(c => { const button = document.createElement('button'); button.className = `history-item ${c.id === activeId ? 'active' : ''}`; button.textContent = c.title || 'New chat'; button.title = c.title || 'New chat'; button.onclick = () => { activeId = c.id; save(); render(); renderHistory(); sidebar.classList.remove('open'); }; history.append(button); }); }
function resize() { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 170) + 'px'; }
function typing() { const row = bubble('assistant', ''); row.classList.add('typing-row'); row.querySelector('.bubble').innerHTML = '<span></span><span></span><span></span>'; return row; }
function setBusy(value) { busy = value; form.querySelector('.send').disabled = value; input.disabled = value; mic.disabled = value; }

async function send(text) {
  text = text.trim(); if (!text || busy) return;
  let key = getKey(); if (!key) { setKey(); key = getKey(); if (!key) return; }
  const c = ensureChat(); c.messages.push({ role: 'user', content: text }); if (c.messages.length === 1) c.title = titleFor(text); save(); render(); renderHistory(); input.value = ''; resize(); setBusy(true); const loader = typing();
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', { method: 'POST', headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json', 'HTTP-Referer': location.href, 'X-Title': 'Aither AI' }, body: JSON.stringify({ model: 'openrouter/free', messages: [{ role: 'system', content: 'You are Aither AI, a helpful conversational AI assistant. Answer naturally and clearly.' }, ...c.messages] }) });
    const data = await response.json().catch(() => ({})); loader.remove();
    if (!response.ok) throw new Error(data?.error?.message || `OpenRouter returned HTTP ${response.status}.`);
    const reply = data?.choices?.[0]?.message?.content; if (!reply) throw new Error('The AI returned no response.');
    c.messages.push({ role: 'assistant', content: reply }); save(); render();
  } catch (error) { loader.remove(); c.messages.push({ role: 'assistant', content: `⚠️ ${error.message}` }); save(); render(); }
  finally { setBusy(false); input.focus(); }
}

form.addEventListener('submit', e => { e.preventDefault(); send(input.value); });
input.addEventListener('input', resize); input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); form.requestSubmit(); } });
clear.onclick = newChat; newChatSide.onclick = newChat; keyButton.onclick = setKey;
theme.onclick = () => { dark = !dark; document.body.classList.toggle('light', !dark); theme.textContent = dark ? '☀️' : '🌙'; localStorage.setItem(themeKey, dark ? 'dark' : 'light'); };
menu.onclick = () => sidebar.classList.add('open'); closeSidebar.onclick = () => sidebar.classList.remove('open');
document.querySelectorAll('.chips button').forEach(b => b.onclick = () => send(b.dataset.prompt));

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (Recognition) { const rec = new Recognition(); rec.lang = 'en-US'; rec.interimResults = false; rec.onstart = () => mic.textContent = '🔴'; rec.onend = () => mic.textContent = '🎤'; rec.onresult = e => { input.value = e.results[0][0].transcript; resize(); input.focus(); }; mic.onclick = () => { try { rec.start(); } catch {} }; }
else mic.onclick = () => alert('Voice input is not supported in this browser.');

if (!chats.length) newChat(); else { if (!active()) activeId = chats[0].id; save(); render(); renderHistory(); }
resize();
