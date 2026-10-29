// Offline: stale-while-revalidate su tutto; l'indice delle materie va prima in rete.
// Le chiavi di cache ignorano la query (?v=…) così ogni file ha una sola copia, sempre l'ultima scaricata.
// Cambiare VERSION crea un aggiornamento: resta in attesa finché l'utente non preme "Aggiorna" in Impostazioni
// (le novità sono in news.json, da aggiornare insieme a VERSION).
const VERSION = "ecq-v17";
const SHELL = ["./", "index.html", "styles.css", "app.js", "grade.js", "sync.js", "notes.js", "cloud.js", "manifest.webmanifest", "icons/icon.svg",
  "vendor/katex/katex.min.js", "vendor/katex/katex.min.css", "vendor/geist/Geist-Variable.woff2", "vendor/geist/Geist-Italic-Variable.woff2", "vendor/pdfjs/pdf.min.mjs", "vendor/pdfjs/pdf.worker.min.mjs", "data/subjects.json"];

self.addEventListener("install", (e) => {
  // ponytail: chi ha una versione senza il pulsante "Aggiorna" (< v17) riceve questa subito, come prima
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => caches.keys())
    .then((ks) => { if (ks.some((k) => /^ecq-v(\d+)$/.test(k) && +k.slice(5) < 17)) return self.skipWaiting(); }));
});
self.addEventListener("message", (e) => {
  if (e.data === "update") self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION && k !== "ecq-slides").map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  const key = url.origin + url.pathname;
  const fresh = /(subjects|news)\.json$/.test(url.pathname);
  e.respondWith(caches.open(VERSION).then(async (c) => {
    const hit = await c.match(key);
    const net = fetch(e.request).then((r) => { if (r.ok) c.put(key, r.clone()); return r; }).catch(() => hit);
    return fresh ? net.then((r) => r || hit) : hit || net;
  }));
});
