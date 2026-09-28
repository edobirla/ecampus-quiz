// Appunti sulla teoria: evidenziazioni e scrittura a mano sopra una lezione.
// - Evidenziazione: ancorata al testo (blocco + posizione nel testo + citazione), così resta sulle stesse parole
//   su qualunque larghezza di schermo. Disegnata con la CSS Custom Highlight API: il DOM della teoria non cambia.
// - Penna: ogni tratto è ancorato al blocco (paragrafo, titolo, formula…) in cui inizia, con coordinate in frazioni
//   della larghezza: su uno schermo più stretto si ridimensiona e resta accanto al suo paragrafo.
// Dati (per materia): { hl: {id: {l, b0, s, b1, e, q, c, n, t}}, ink: {id: {l, b, p: [x,y,…], c, w, t}} };
// una cancellazione è {del: 1, t}, così si propaga col backup (mergeNotes in sync.js).

export const HL_COLORS = ["giallo", "verde", "rosa", "azzurro"];
export const INK_COLORS = ["var(--text)", "#e5484d", "#3b6fe0", "#16a34a"];
export const INK_WIDTHS = [2, 4, 8];
const Q = 10000; // precisione delle coordinate (frazioni della larghezza)

const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const textNodes = (el) => {
  const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), out = [];
  while (w.nextNode()) out.push(w.currentNode);
  return out;
};
// posizione (nodo, offset) → numero di caratteri dall'inizio del blocco
function offsetIn(block, node, off) {
  const r = document.createRange();
  r.setStart(block, 0);
  r.setEnd(node, off);
  return r.toString().length;
}
// numero di caratteri → posizione (nodo, offset)
function pointAt(block, n) {
  let pos = 0;
  for (const t of textNodes(block)) {
    if (n <= pos + t.length) return [t, n - pos];
    pos += t.length;
  }
  return null;
}

export function mountNotes(article, { lesson, get, save, editable = true, onHighlightTap, onDoubleTap }) {
  const blocks = () => [...article.children].filter((el) => el.tagName !== "CANVAS");
  const blockOf = (node) => { const bs = blocks(); while (node && node !== article) { if (bs.includes(node)) return node; node = node.parentNode; } return null; };
  let data = get();
  const live = (k) => Object.entries(data[k]).filter(([, v]) => !v.del && v.l === lesson);
  const undo = [];
  const put = (k, id, v, record = true) => {
    if (record) undo.push([k, id, data[k][id]]);
    data[k][id] = v;
    save(data);
  };

  // ---------- evidenziazioni
  const ranges = new Map();
  function rangeOf(h) {
    const bs = blocks(), b0 = bs[h.b0], b1 = bs[h.b1];
    if (b0 && b1) {
      const a = pointAt(b0, h.s), z = pointAt(b1, h.e);
      if (a && z) {
        const r = document.createRange();
        r.setStart(...a); r.setEnd(...z);
        if (r.toString() === h.q) return r;
      }
    }
    // la teoria è cambiata: cerca la citazione nel resto della lezione
    for (const b of bs) {
      const i = b.textContent.indexOf(h.q);
      if (i >= 0) { const r = document.createRange(); r.setStart(...pointAt(b, i)); r.setEnd(...pointAt(b, i + h.q.length)); return r; }
    }
    return null;
  }
  function paintHighlights() {
    ranges.clear();
    if (!window.CSS?.highlights) return; // ponytail: senza Highlight API (Safari < 17.2) le evidenziazioni restano solo nell'elenco appunti
    const byColor = HL_COLORS.map(() => []);
    for (const [id, h] of live("hl")) { const r = rangeOf(h); if (r) { ranges.set(id, r); byColor[h.c]?.push(r); } }
    byColor.forEach((rs, c) => CSS.highlights.set(`hl-${c}`, new Highlight(...rs)));
  }

  let lastSel = null;
  const onSel = () => {
    const s = document.getSelection();
    if (s.rangeCount && !s.isCollapsed && article.contains(s.getRangeAt(0).commonAncestorContainer)) lastSel = s.getRangeAt(0).cloneRange();
  };
  // salva un intervallo di testo come evidenziazione (ancorata a blocco + posizione nel testo + citazione)
  function saveRange(r, c) {
    const b0 = blockOf(r.startContainer), b1 = blockOf(r.endContainer);
    if (!b0 || !b1 || !r.toString().trim()) return false;
    const bs = blocks();
    put("hl", newId(), { l: lesson, b0: bs.indexOf(b0), s: offsetIn(b0, r.startContainer, r.startOffset),
      b1: bs.indexOf(b1), e: offsetIn(b1, r.endContainer, r.endOffset), q: r.toString(), c, t: Date.now() });
    paintHighlights();
    return true;
  }
  function highlight(c) {
    const r = lastSel;
    if (!r || r.collapsed) return false;
    lastSel = null;
    document.getSelection().removeAllRanges();
    return saveRange(r, c);
  }
  // punto del testo sotto le coordinate (la tela della penna non deve intercettare la ricerca)
  function caretAt(x, y) {
    const pe = canvas.style.pointerEvents;
    canvas.style.pointerEvents = "none";
    let p = document.caretRangeFromPoint?.(x, y);
    if (!p && document.caretPositionFromPoint) {
      const c = document.caretPositionFromPoint(x, y);
      if (c) { p = document.createRange(); p.setStart(c.offsetNode, c.offset); }
    }
    canvas.style.pointerEvents = pe;
    return p && article.contains(p.startContainer) && p.startContainer.nodeType === 3 ? p : null;
  }
  // l'evidenziatore si allinea alle parole intere
  const WORD = /[\p{L}\p{N}]/u;
  function snap(r) {
    const s = r.startContainer, e = r.endContainer;
    let so = r.startOffset, eo = r.endOffset;
    if (s.nodeType === 3) while (so > 0 && WORD.test(s.data[so - 1])) so--;
    if (e.nodeType === 3) while (eo < e.data.length && WORD.test(e.data[eo])) eo++;
    r.setStart(s, so); r.setEnd(e, eo);
    return r;
  }
  function spanBetween(a, b) {
    const r = document.createRange();
    if (a.compareBoundaryPoints(Range.START_TO_START, b) <= 0) { r.setStart(a.startContainer, a.startOffset); r.setEnd(b.startContainer, b.startOffset); }
    else { r.setStart(b.startContainer, b.startOffset); r.setEnd(a.startContainer, a.startOffset); }
    return snap(r);
  }
  function hitHighlight(x, y) {
    const p = caretAt(x, y);
    if (!p) return null;
    for (const [id, r] of ranges) if (r.isPointInRange(p.startContainer, p.startOffset)) return id;
    return null;
  }
  const onClick = (e) => {
    if (!editable || tool !== "hl" || !document.getSelection().isCollapsed) return;
    const id = hitHighlight(e.clientX, e.clientY);
    if (id) onHighlightTap?.(id);
  };

  // ---------- penna
  const canvas = document.createElement("canvas");
  canvas.className = "ink";
  article.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let tool = "hl", penColor = 0, penWidth = 1, drawing = null;
  const W = () => article.clientWidth;
  const top = (b) => blocks()[b]?.offsetTop ?? 0;
  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = article.clientWidth * dpr; canvas.height = article.scrollHeight * dpr;
    canvas.style.width = article.clientWidth + "px"; canvas.style.height = article.scrollHeight + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    redraw();
  }
  const cssColor = (c) => (c.startsWith("var(") ? getComputedStyle(article).getPropertyValue(c.slice(4, -1)).trim() : c);
  function stroke(pts, color, width) {
    if (pts.length < 2) return;
    ctx.strokeStyle = cssColor(color); ctx.lineWidth = width; ctx.lineCap = ctx.lineJoin = "round";
    ctx.beginPath(); ctx.moveTo(pts[0], pts[1]);
    // curva morbida: quadratiche tra i punti medi
    for (let i = 2; i < pts.length - 2; i += 2) ctx.quadraticCurveTo(pts[i], pts[i + 1], (pts[i] + pts[i + 2]) / 2, (pts[i + 1] + pts[i + 3]) / 2);
    ctx.lineTo(pts.at(-2), pts.at(-1));
    ctx.stroke();
  }
  const toPx = (s) => { const w = W(), t = top(s.b); return s.p.map((v, i) => (i % 2 ? t + (v * w) / Q : (v * w) / Q)); };
  function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (article.classList.contains("ink-hidden")) return;
    for (const [, s] of live("ink")) stroke(toPx(s), INK_COLORS[s.c], (INK_WIDTHS[s.w] * W()) / 700);
    if (drawing) stroke(drawing.px, INK_COLORS[penColor], (INK_WIDTHS[penWidth] * W()) / 700);
  }
  const local = (e) => { const r = article.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const accepts = (e) => e.pointerType === "pen" || e.pointerType === "mouse"; // con il dito si scorre
  function erase([x, y]) {
    for (const [id, s] of live("ink")) {
      const px = toPx(s);
      for (let i = 0; i < px.length; i += 2) if (Math.hypot(px[i] - x, px[i + 1] - y) < 12) { put("ink", id, { del: 1, t: Date.now() }); break; }
    }
    // la gomma toglie anche le evidenziazioni su cui passa
    const a = article.getBoundingClientRect(), h = hitHighlight(a.left + x, a.top + y);
    if (h) { put("hl", h, { del: 1, t: Date.now() }); paintHighlights(); }
    redraw();
  }
  canvas.addEventListener("pointerdown", (e) => {
    if (!accepts(e)) return;
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId);
    const p = local(e);
    if (tool === "eraser") { drawing = { erase: true }; erase(p); return; }
    // il tratto appartiene al blocco sotto il punto di partenza
    const bs = blocks();
    let b = bs.findIndex((el) => el.offsetTop + el.offsetHeight >= p[1]);
    if (b < 0) b = bs.length - 1;
    drawing = { b, px: p };
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!drawing || !accepts(e)) return;
    const p = local(e);
    if (drawing.erase) return erase(p);
    const [lx, ly] = drawing.px.slice(-2);
    if (Math.hypot(p[0] - lx, p[1] - ly) < 1.5) return;
    drawing.px.push(...p);
    redraw();
  });
  const end = () => {
    if (drawing && !drawing.erase && drawing.px.length >= 4) {
      const w = W(), t = top(drawing.b);
      put("ink", newId(), { l: lesson, b: drawing.b, c: penColor, w: penWidth, t: Date.now(),
        p: drawing.px.map((v, i) => Math.round(((i % 2 ? v - t : v) * Q) / w)) });
    }
    drawing = null;
    redraw();
  };
  canvas.addEventListener("pointerup", end);
  canvas.addEventListener("pointercancel", end);
  // doppio tocco con il dito: cambia strumento (penna ↔ gomma). Il doppio tocco sul corpo della Apple Pencil
  // non è accessibile alle pagine web, questo è il gesto più vicino; il dito qui serve solo a scorrere.
  let lastTap = null;
  article.addEventListener("pointerup", (e) => {
    if (e.pointerType !== "touch" || tool === "hl") return; // in modalità selezione il doppio tocco seleziona una parola
    const now = Date.now(), p = [e.clientX, e.clientY];
    if (lastTap && now - lastTap.t < 350 && Math.hypot(p[0] - lastTap.p[0], p[1] - lastTap.p[1]) < 40) { lastTap = null; onDoubleTap?.(); }
    else lastTap = { t: now, p };
  });
  // iPad: la Apple Pencil non deve far scorrere la pagina, il dito sì
  const stylus = (e) => { if ([...e.touches].some((t) => t.touchType === "stylus")) e.preventDefault(); };
  canvas.addEventListener("touchstart", stylus, { passive: false });
  canvas.addEventListener("touchmove", stylus, { passive: false });

  // ---------- evidenziatore: si passa con la Apple Pencil (o il mouse) sul testo; l'evidenziazione si
  // aggancia alle parole, quindi resta giusta su qualunque schermo
  let hlColor = 0, marking = null;
  const draft = () => { if (window.CSS?.highlights) CSS.highlights.set("hl-draft", new Highlight(...(marking?.r ? [marking.r] : []))); };
  article.addEventListener("pointerdown", (e) => {
    if (!editable || tool !== "marker" || !accepts(e)) return;
    const p = caretAt(e.clientX, e.clientY);
    if (!p) return;
    e.preventDefault();
    try { article.setPointerCapture(e.pointerId); } catch {}
    marking ={ start: p, r: snap(p.cloneRange()) };
    draft();
  });
  article.addEventListener("pointermove", (e) => {
    if (!marking || !accepts(e)) return;
    const p = caretAt(e.clientX, e.clientY);
    if (p) { marking.r = spanBetween(marking.start, p); draft(); }
  });
  const endMark = () => {
    if (!marking) return;
    const r = marking.r;
    marking = null;
    draft();
    if (r && !r.collapsed) saveRange(r, hlColor);
  };
  article.addEventListener("pointerup", endMark);
  article.addEventListener("pointercancel", endMark);
  const stylusMark = (e) => { if (tool === "marker") stylus(e); };
  article.addEventListener("touchstart", stylusMark, { passive: false });
  article.addEventListener("touchmove", stylusMark, { passive: false });

  document.addEventListener("selectionchange", onSel);
  article.addEventListener("click", onClick);
  const ro = new ResizeObserver(() => resize());
  ro.observe(article);
  paintHighlights();
  resize();

  return {
    setTool(t, opts = {}) {
      tool = t;
      if (opts.color !== undefined) penColor = opts.color;
      if (opts.width !== undefined) penWidth = opts.width;
      if (opts.hlColor !== undefined) { hlColor = opts.hlColor; document.documentElement.style.setProperty("--hl-draft", `var(--hl-${hlColor})`); }
      canvas.classList.toggle("on", editable && (t === "pen" || t === "eraser"));
      article.classList.toggle("marking", editable && t === "marker");
    },
    get tool() { return tool; },
    highlight,
    hasSelection: () => !!lastSel,
    get: (id) => data.hl[id],
    updateHighlight(id, v) { put("hl", id, { ...data.hl[id], ...v, t: Date.now() }); paintHighlights(); },
    removeHighlight(id) { put("hl", id, { del: 1, t: Date.now() }); paintHighlights(); },
    undo() {
      const last = undo.pop();
      if (!last) return false;
      const [k, id, prev] = last;
      put(k, id, prev ? { ...prev, t: Date.now() } : { del: 1, t: Date.now() }, false);
      paintHighlights(); redraw();
      return true;
    },
    scrollTo(id) { const r = ranges.get(id); if (r) window.scrollTo({ top: r.getBoundingClientRect().top + scrollY - 120 }); },
    refresh() { data = get(); paintHighlights(); redraw(); },
    destroy() { document.removeEventListener("selectionchange", onSel); ro.disconnect(); },
  };
}
