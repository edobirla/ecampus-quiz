// Offline: stale-while-revalidate su tutto; l'indice delle materie va prima in rete.
// Le chiavi di cache ignorano la query (?v=…) così ogni file ha una sola copia, sempre l'ultima scaricata.
// Cambiare VERSION forza il ricaricamento della shell.
const VERSION = "ecq-v2";
const SHELL = ["./", "index.html", "styles.css", "app.js", "grade.js", "manifest.webmanifest", "icons/icon.svg",
  "vendor/katex/katex.min.js", "vendor/katex/katex.min.css", "data/subjects.json"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  const key = url.origin + url.pathname;
  const fresh = url.pathname.endsWith("subjects.json");
  e.respondWith(caches.open(VERSION).then(async (c) => {
    const hit = await c.match(key);
    const net = fetch(e.request).then((r) => { if (r.ok) c.put(key, r.clone()); return r; }).catch(() => hit);
    return fresh ? net.then((r) => r || hit) : hit || net;
  }));
});
