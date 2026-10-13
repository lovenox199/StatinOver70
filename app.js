// Presentation behavior. For content changes, edit slides.js.

// STATE AND BACKGROUND VARIANTS
let index = 0,
  notes = false,
  revealed = slides.map((s) => s.steps.map(() => false));
const backgroundVariants = slides.map(() => 0);
for (let i = 1; i < backgroundVariants.length; i++) {
  const options = [0, 1, 2, 3].filter((v) => v !== backgroundVariants[i - 1]);
  backgroundVariants[i] = options[Math.floor(Math.random() * options.length)];
}

const answerReveals = slides.map(() => ({}));
let penMode = false,
  strokes = slides.map(() => []),
  activeStroke = null,
  activePointer = null;
const $ = (id) => document.getElementById(id);
function sourceLinks(ref) {
  let out = [];
  if (ref === "staree" || ref === "both")
    out.push(
      '<a href="https://doi.org/10.1056/NEJMoa2607314" target="_blank" rel="noopener">STAREE ↗</a>',
    );
  if (ref === "meta" || ref === "both")
    out.push(
      '<a href="https://doi.org/10.1002/trc2.70039" target="_blank" rel="noopener">Meta-analysis ↗</a>',
    );
  return out.join(" · ");
}

// INLINE ANSWER REVEALS
function inlineBody(body) {
  return body.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const a = slides[index].maskedAnswers[key],
      shown = !!answerReveals[index][key];
    return `<button id="mask-${key}" data-mask="${key}" class="maskedAnswer ${shown ? "isRevealed" : ""}" onclick="revealAnswer('${key}')" aria-expanded="${shown}" aria-label="${shown ? a.value : "Reveal " + a.label}" style="--answer-width:${a.value.length + 1}ch">${shown ? a.value : "?"}</button>`;
  });
}
function revealAnswer(key) {
  if (answerReveals[index][key]) return;
  answerReveals[index][key] = true;
  const b = $("mask-" + key),
    a = slides[index].maskedAnswers[key];
  if (b) {
    b.textContent = a.value;
    b.classList.add("isRevealed");
    b.setAttribute("aria-expanded", "true");
    b.setAttribute("aria-label", a.value);
    if (!penMode) b.focus({ preventScroll: true });
  }
}

// SLIDE RENDERING
function render() {
  let s = slides[index];
  $("frame").classList.toggle("heroMode", s.layout === "cover");
  $("frame").dataset.background = String(backgroundVariants[index]);
  let html = "";
  if (s.layout === "cover") {
    html =
      '<section class="hero"><button class="logoButton" onclick="go(1)" aria-label="Start presentation"><h1>Statins<br><em>After 70</em></h1></button></section>';
  } else {
    html = `<section class="${s.layout === "references" ? "references" : ""}"><h2>${s.title}</h2><div class="${s.layout === "rows" ? "takeawayRows" : s.layout === "references" ? "sourceList" : "answers cards-" + s.steps.length}">`;
    s.steps.forEach((a, i) => {
      if (s.layout === "references") {
        html += `<article class="sourceEntry"><p>${a.body}</p></article>`;
        return;
      }
      if (s.layout === "rows") {
        html += `<button data-card="${i}" class="takeawayRow ${revealed[index][i] ? "isRevealed" : ""}" onclick="toggleCard(${i})" aria-expanded="${revealed[index][i]}" aria-label="${revealed[index][i] ? "Takeaway " + (i + 1) + " revealed" : "Reveal takeaway " + (i + 1)}"><span class="rowNumber">${i + 1}.</span><span class="rowText" ${revealed[index][i] ? "" : 'aria-hidden="true"'}>${a.body}</span>${revealed[index][i] ? "" : '<span class="rowPlaceholder" aria-hidden="true"></span>'}</button>`;
        return;
      }
      if (s.layout === "inline") {
        html += `<article class="answer open inlinePanel"><p>${inlineBody(a.body)}</p></article>`;
        return;
      }
      html += `<button data-card="${i}" class="answer stableCard ${revealed[index][i] ? "open" : "closed"}" onclick="toggleCard(${i})" aria-expanded="${revealed[index][i]}" aria-label="${revealed[index][i] ? a.label + " revealed" : "Reveal " + a.label}"><div class="cardAnswer" ${revealed[index][i] ? "" : 'aria-hidden="true"'}>${a.body}</div>${revealed[index][i] ? "" : `<span class="cardCover">${a.label}</span>`}</button>`;
    });
    html += `</div><div class="source">${s.ref === "meta" ? "Westphal Filho et al. 2025" : s.ref === "both" ? "STAREE 2026 · Westphal Filho et al. 2025" : "Zoungas et al. NEJM 2026"} · ${sourceLinks(s.ref)}${s.layout === "references" ? ' · Background design: <a href="https://slidesgo.com" target="_blank" rel="noopener">Slidesgo / Freepik</a>' : ""}</div></section>`;
  }
  $("content").innerHTML = '<div class="slide">' + html + "</div>";
  $("count").textContent =
    String(index + 1).padStart(2, "0") + " / " + slides.length;
  $("bar").style.width = ((index + 1) / slides.length) * 100 + "%";
  $("dots").innerHTML = slides
    .map(
      (a, i) =>
        `<button class="${i === index ? "active" : ""}" aria-label="Slide ${i + 1}: ${a.title}" ${i === index ? 'aria-current="step"' : ""} onclick="go(${i})"></button>`,
    )
    .join("");
  $("prev").disabled = index === 0;
  $("next").textContent = index === slides.length - 1 ? "Restart ↺" : "Next →";
  $("speaker").innerHTML =
    "<h3>Presenter notes</h3><p>" +
    s.notes.replace(
      "Ask first, allow discussion, then reveal each answer. Keyboard: Space reveals; right arrow advances after the slide is fully revealed; N opens notes; O opens outline.",
      "Ask first, allow discussion, then click each card to reveal.",
    ) +
    "</p>";
  fitInk();
}
function go(i) {
  pauseAutumnPile();
  finishStroke();
  index = Math.max(0, Math.min(slides.length - 1, i));
  if (index === 0 && notes) toggleNotes();
  render();
  syncAutumnPile();
  window.scrollTo(0, 0);
}

// AUTUMN ARTWORK AND COLLISION PHYSICS
const burstSprites = [
  {
    x: 274,
    y: 75,
    w: 140,
    h: 187,
    clip: "polygon(15% 0,57% 0,73% 20%,67% 42%,90% 16%,100% 51%,98% 76%,79% 94%,49% 100%,0 95%,20% 81%,23% 46%,0 22%)",
  },
  {
    x: 0,
    y: 128,
    w: 139,
    h: 130,
    clip: "polygon(28% 8%,30% 0,69% 0,75% 12%,94% 25%,100% 68%,89% 94%,49% 100%,11% 91%,0 59%,8% 24%)",
  },
  {
    x: 398,
    y: 106,
    w: 116,
    h: 150,
    clip: "polygon(25% 0,66% 0,67% 9%,100% 10%,98% 93%,68% 100%,24% 97%,0 89%,10% 70%,22% 65%)",
  },
  {
    x: 599,
    y: 0,
    w: 87,
    h: 96,
    clip: "polygon(20% 0,80% 0,91% 24%,100% 32%,90% 48%,100% 61%,100% 100%,0 100%,0 68%,0 50%,19% 44%,35% 45%,32% 36%,12% 34%)",
  },
  {
    x: 495,
    y: 195,
    w: 191,
    h: 163,
    clip: "polygon(48% 10%,62% 0,74% 0,100% 22%,100% 57%,68% 76%,49% 72%,47% 88%,36% 99%,0 95%,0 60%,36% 48%)",
  },
  {
    x: 136,
    y: 228,
    w: 150,
    h: 130,
    clip: "polygon(0 10%,30% 0,71% 0,80% 9%,83% 50%,100% 76%,86% 92%,51% 100%,20% 95%,0 81%,10% 50%)",
  },
];
let autumnPieces = [],
  autumnFrame = 0,
  autumnLast = 0,
  autumnLayer = null,
  autumnQuiet = 0;
function clearAutumnPile() {
  cancelAnimationFrame(autumnFrame);
  autumnFrame = 0;
  autumnLast = 0;
  autumnPieces = [];
  if (autumnLayer) autumnLayer.remove();
  autumnLayer = null;
}
function autumnBounds() {
  const frame = $("frame"),
    r = frame.getBoundingClientRect(),
    line = $("bar").parentElement.getBoundingClientRect();
  const top = r.top + (frame.clientTop || 0);
  return {
    left: line.left,
    top,
    width: line.width,
    height: Math.max(1, line.top - top),
    offset: line.left - r.left - (frame.clientLeft || 0),
  };
}
function pauseAutumnPile() {
  cancelAnimationFrame(autumnFrame);
  autumnFrame = 0;
  if (autumnLayer) autumnLayer.style.display = "none";
}
function syncAutumnPile() {
  if (!autumnLayer) return;
  if (slides[index].layout !== "rows") {
    pauseAutumnPile();
    return;
  }
  const b = autumnBounds();
  autumnLayer.style.display = "block";
  autumnLayer.style.left = b.offset + "px";
  autumnLayer.style.width = b.width + "px";
  autumnLayer.style.height = b.height + "px";
  if (!autumnFrame && autumnPieces.length) {
    autumnQuiet = 0;
    autumnLast = performance.now();
    autumnFrame = requestAnimationFrame(tickAutumn);
  }
}
window.addEventListener("resize", syncAutumnPile);

function burstTakeaway(row) {
  const bounds = autumnBounds(),
    w = bounds.width,
    h = bounds.height;
  if (!autumnLayer) {
    autumnLayer = document.createElement("div");
    autumnLayer.className = "gravityAutumn";
    autumnLayer.setAttribute("aria-hidden", "true");
    $("frame").appendChild(autumnLayer);
    syncAutumnPile();
  }
  const rect = row
    ? row.getBoundingClientRect()
    : $("content").getBoundingClientRect();
  const reduced = window.matchMedia?.(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  for (let n = 0; n < 18; n++) {
    const art = burstSprites[n % burstSprites.length],
      size = 52 + Math.random() * 32,
      scale = size / Math.max(art.w, art.h);
    const el = document.createElement("div");
    el.className = "gravityPiece";
    const image = document.createElement("div");
    image.className = "gravitySprite";
    image.style.width = art.w + "px";
    image.style.height = art.h + "px";
    image.style.backgroundPosition = `-${art.x}px -${art.y}px`;
    image.style.clipPath = art.clip;
    image.style.transform = `scale(${scale})`;
    el.appendChild(image);
    autumnLayer.appendChild(el);
    const x = Math.max(
      size,
      Math.min(
        w - size,
        rect.left - bounds.left + rect.width * (0.18 + (0.64 * n) / 17),
      ),
    );
    const radius = size * 0.46;
    const p = {
      el,
      x,
      y:
        Math.min(h - size - 10, rect.top - bounds.top + rect.height / 2) -
        (n % 3) * size,
      vx: (Math.random() - 0.5) * 360,
      vy: -260 - Math.random() * 260,
      angle: Math.random() * 40 - 20,
      spin: (Math.random() - 0.5) * 120,
      width: art.w * scale,
      height: art.h * scale,
      radius,
      mass: radius * radius,
    };
    el.style.width = p.width + "px";
    el.style.height = p.height + "px";
    if (reduced) {
      p.x = radius + Math.random() * (w - 2 * radius);
      p.y = h - radius;
      p.vx = 0;
      p.vy = 0;
    }
    autumnPieces.push(p);
    el.style.transform = `translate3d(${p.x - p.width / 2}px,${p.y - p.height / 2}px,0)`;
  }
  autumnQuiet = 0;
  if (!autumnFrame && !reduced) {
    autumnLast = performance.now();
    autumnFrame = requestAnimationFrame(tickAutumn);
  }
}
function stepAutumn(dt, w, h) {
  for (const p of autumnPieces) {
    p.vy += 1050 * dt;
    p.vx *= 0.999;
    p.spin *= 0.998;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.angle += p.spin * dt;
  }
  // Sequential impulses: circular bodies exchange momentum and resolve contact six times per step.
  for (let iteration = 0; iteration < 6; iteration++) {
    for (let i = 0; i < autumnPieces.length; i++)
      for (let j = i + 1; j < autumnPieces.length; j++) {
        const a = autumnPieces[i],
          b = autumnPieces[j];
        let dx = b.x - a.x,
          dy = b.y - a.y;
        const sum = a.radius + b.radius;
        if (Math.abs(dx) > sum || Math.abs(dy) > sum) continue;
        let dist = Math.hypot(dx, dy);
        if (dist >= sum) continue;
        if (dist < 0.001) {
          dx = 0.001;
          dy = 0;
          dist = 0.001;
        }
        const nx = dx / dist,
          ny = dy / dist,
          ia = 1 / a.mass,
          ib = 1 / b.mass,
          total = ia + ib;
        const correction = (Math.max(0, sum - dist - 0.15) * 0.85) / total;
        a.x -= nx * correction * ia;
        a.y -= ny * correction * ia;
        b.x += nx * correction * ib;
        b.y += ny * correction * ib;
        const normal = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
        if (normal < 0) {
          const impulse = (-(1 + (normal < -90 ? 0.24 : 0)) * normal) / total;
          a.vx -= impulse * nx * ia;
          a.vy -= impulse * ny * ia;
          b.vx += impulse * nx * ib;
          b.vy += impulse * ny * ib;
          const tx = -ny,
            ty = nx,
            tangent = (b.vx - a.vx) * tx + (b.vy - a.vy) * ty;
          const friction = Math.max(
            -impulse * 0.32,
            Math.min(impulse * 0.32, -tangent / total),
          );
          a.vx -= friction * tx * ia;
          a.vy -= friction * ty * ia;
          b.vx += friction * tx * ib;
          b.vy += friction * ty * ib;
          a.spin += ((tangent / a.radius) * 57.3 - a.spin) * 0.06;
          b.spin += ((tangent / b.radius) * 57.3 - b.spin) * 0.06;
        }
      }
    for (const p of autumnPieces) {
      if (p.x < p.radius) {
        p.x = p.radius;
        if (p.vx < 0) p.vx *= -0.3;
      }
      if (p.x > w - p.radius) {
        p.x = w - p.radius;
        if (p.vx > 0) p.vx *= -0.3;
      }
      if (p.y > h - p.radius) {
        p.y = h - p.radius;
        if (p.vy > 0) p.vy = p.vy > 90 ? -p.vy * 0.22 : 0;
        p.vx *= 0.94;
        p.spin += ((p.vx / p.radius) * 57.3 - p.spin) * 0.15;
      }
    }
  }
}
function tickAutumn(now) {
  const elapsed = Math.min(Math.max((now - autumnLast) / 1000, 0), 0.05);
  autumnLast = now;
  const steps = Math.max(1, Math.ceil(elapsed / (1 / 120))),
    dt = elapsed / steps;
  const bounds = autumnBounds();
  for (let k = 0; k < steps; k++) stepAutumn(dt, bounds.width, bounds.height);
  let speed = 0;
  for (const p of autumnPieces) {
    speed = Math.max(speed, Math.hypot(p.vx, p.vy));
    p.el.style.transform = `translate3d(${p.x - p.width / 2}px,${p.y - p.height / 2}px,0) rotate(${p.angle}deg)`;
  }
  autumnQuiet = speed < 30 ? autumnQuiet + elapsed : 0;
  autumnFrame = autumnQuiet < 1.2 ? requestAnimationFrame(tickAutumn) : 0;
  if (!autumnFrame)
    for (const p of autumnPieces) {
      p.vx = 0;
      p.vy = 0;
      p.spin = 0;
    }
}
function animateTakeaway(row) {
  if (!row || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
    return;
  row.animate(
    [{ backgroundColor: "#f7d6af" }, { backgroundColor: "#ffecd8d9" }],
    { duration: 600, easing: "ease-out" },
  );
  const text = row.querySelector(".rowText");
  if (text)
    text.animate(
      [
        { opacity: 0, transform: "translateY(4px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 280, easing: "ease-out" },
    );
}

// CARD REVEALS AND PRESENTER CONTROLS
function toggleCard(i) {
  if (revealed[index][i]) return;
  revealed[index][i] = true;
  const b = document.querySelectorAll("[data-card]")[i];
  if (!b) return;
  b.setAttribute("aria-expanded", "true");
  b.setAttribute("aria-label", slides[index].steps[i].label + " revealed");
  if (slides[index].layout === "rows") {
    b.classList.add("isRevealed");
    b.querySelector(".rowText")?.removeAttribute("aria-hidden");
    b.querySelector(".rowPlaceholder")?.remove();
    animateTakeaway(b);
    burstTakeaway(b);
  } else {
    b.classList.remove("closed");
    b.classList.add("open");
    b.querySelector(".cardAnswer")?.removeAttribute("aria-hidden");
    b.querySelector(".cardCover")?.remove();
  }
  if (!penMode) b.focus({ preventScroll: true });
}

function toggleNotes() {
  notes = !notes;
  $("speaker").classList.toggle("hidden", !notes);
  $("notesBtn").setAttribute("aria-pressed", String(notes));
}
function toggleOutline(open) {
  $("outline").classList.toggle("hidden", !open);
  if (open) $("closeOutline").focus();
  else if (index !== 0) $("outlineBtn").focus();
}
$("prev").onclick = () => go(index - 1);
$("next").onclick = () => go(index === slides.length - 1 ? 0 : index + 1);
$("notesBtn").onclick = toggleNotes;
$("outlineBtn").onclick = () => toggleOutline(true);
$("closeOutline").onclick = () => toggleOutline(false);
$("outline").onclick = (e) => {
  if (e.target === $("outline")) toggleOutline(false);
};
$("outlineList").innerHTML = slides
  .map(
    (s, i) =>
      `<button onclick="go(${i});toggleOutline(false)"><span>${String(i + 1).padStart(2, "0")}</span>${s.title}</button>`,
  )
  .join("");
$("full").onclick = async () => {
  try {
    if (!document.fullscreenElement)
      await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch (e) {
    $("full").textContent = "Use browser full screen";
  }
};

// PEN: CANVAS, STROKES, AND POINTER INPUT
const ink = $("inkCanvas"),
  inkContext = ink.getContext("2d");
function fitInk() {
  const frame = $("frame"),
    r = frame.getBoundingClientRect();
  const width = frame.clientWidth || r.width,
    height = frame.clientHeight || r.height,
    ratio = window.devicePixelRatio || 1;
  ink.style.left = "0px";
  ink.style.top = "0px";
  ink.style.width = width + "px";
  ink.style.height = height + "px";
  const w = Math.max(1, Math.round(width * ratio)),
    h = Math.max(1, Math.round(height * ratio));
  if (ink.width !== w || ink.height !== h) {
    ink.width = w;
    ink.height = h;
  }
  inkContext.setTransform(ratio, 0, 0, ratio, 0, 0);
  redrawInk();
}
function redrawInk() {
  const r = ink.getBoundingClientRect();
  inkContext.clearRect(0, 0, r.width, r.height);
  for (const stroke of strokes[index]) paintStroke(stroke, r.width, r.height);
}
function paintStroke(stroke, w, h) {
  const pts = stroke.points;
  if (!pts.length) return;
  inkContext.strokeStyle = stroke.color;
  inkContext.fillStyle = stroke.color;
  inkContext.lineCap = "round";
  inkContext.lineJoin = "round";
  if (pts.length === 1) {
    inkContext.beginPath();
    inkContext.arc(
      pts[0].x * w,
      pts[0].y * h,
      (pts[0].width || 3) / 2,
      0,
      Math.PI * 2,
    );
    inkContext.fill();
    return;
  }
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1],
      b = pts[i];
    inkContext.lineWidth = ((a.width || 3) + (b.width || 3)) / 2;
    inkContext.beginPath();
    inkContext.moveTo(a.x * w, a.y * h);
    inkContext.lineTo(b.x * w, b.y * h);
    inkContext.stroke();
  }
}
function inkPoint(e) {
  const r = ink.getBoundingClientRect(),
    x = (e.clientX - r.left) / r.width,
    y = (e.clientY - r.top) / r.height,
    t = e.timeStamp || performance.now(),
    last = activeStroke?.points.at(-1);
  let target = 3;
  if (e.pointerType === "pen" && e.pressure > 0) target = 2 + 2.2 * e.pressure;
  else if (last) {
    const speed =
      Math.hypot((x - last.x) * r.width, (y - last.y) * r.height) /
      Math.max(8, t - last.t);
    target = 2.2 + 1.6 / (1 + speed * 1.3);
  }
  const width = Math.max(
    2,
    Math.min(4.2, last ? last.width * 0.72 + target * 0.28 : target),
  );
  return { x, y, t, width };
}
function finishStroke() {
  if (activePointer !== null && ink.hasPointerCapture(activePointer))
    ink.releasePointerCapture(activePointer);
  activePointer = null;
  activeStroke = null;
}
function setPen(enabled) {
  finishStroke();
  penMode = enabled;
  ink.classList.toggle("drawing", enabled);
  $("penBtn").setAttribute("aria-pressed", String(enabled));
  $("penBtn").textContent = enabled ? "Pen on" : "Pen";
  $("penTools").classList.toggle("hidden", !enabled);
  fitInk();
}
$("penBtn").onclick = () => setPen(!penMode);
$("undoInk").onclick = () => {
  finishStroke();
  strokes[index].pop();
  redrawInk();
};
$("clearInk").onclick = () => {
  finishStroke();
  strokes[index] = [];
  redrawInk();
};
ink.addEventListener("pointerdown", (e) => {
  if (!penMode || e.button !== 0 || activePointer !== null) return;
  e.preventDefault();
  const hit = document
    .elementsFromPoint(e.clientX, e.clientY)
    .map((x) => x.closest?.("[data-mask],[data-card]"))
    .find(Boolean);
  if (hit?.dataset.mask && !answerReveals[index][hit.dataset.mask]) {
    revealAnswer(hit.dataset.mask);
    return;
  } else if (
    hit?.dataset.card !== undefined &&
    !revealed[index][Number(hit.dataset.card)]
  ) {
    toggleCard(Number(hit.dataset.card));
    return;
  }
  activePointer = e.pointerId;
  activeStroke = { color: $("inkColor").value, points: [inkPoint(e)] };
  strokes[index].push(activeStroke);
  ink.setPointerCapture(e.pointerId);
  redrawInk();
});
ink.addEventListener("pointermove", (e) => {
  if (e.pointerId !== activePointer || !activeStroke) return;
  e.preventDefault();
  const points = e.getCoalescedEvents?.();
  for (const point of points?.length ? points : [e])
    activeStroke.points.push(inkPoint(point));
  redrawInk();
});
ink.addEventListener("pointerup", (e) => {
  if (e.pointerId === activePointer) finishStroke();
});
ink.addEventListener("pointercancel", finishStroke);
ink.addEventListener("lostpointercapture", () => {
  activePointer = null;
  activeStroke = null;
});
window.addEventListener("resize", fitInk);
new ResizeObserver(fitInk).observe($("frame"));

// KEYBOARD SHORTCUTS
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    toggleOutline(false);
    if (notes) toggleNotes();
    return;
  }
  if (!$("outline").classList.contains("hidden")) return;
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName))
    return;
  if (e.key === "ArrowRight") {
    e.preventDefault();
    go(index + 1);
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    go(index - 1);
  } else if (e.key.toLowerCase() === "n" && index !== 0) toggleNotes();
  else if (e.key.toLowerCase() === "o" && index !== 0) toggleOutline(true);
});

// STARTUP AND FONT PRELOADING
async function startPresentation() {
  let timeout;
  try {
    if (document.fonts) {
      const requests = [
        "400 32px Barrio",
        "400 32px Sniglet",
        '400 24px "Fira Sans"',
        '600 24px "Fira Sans"',
        '700 24px "Fira Sans"',
      ];
      await Promise.race([
        Promise.all(
          requests.map((font) =>
            document.fonts.load(font).then((faces) => {
              if (!faces.length) throw new Error("Missing font");
            }),
          ),
        ),
        new Promise((_, reject) => {
          timeout = setTimeout(() => reject(new Error("Font timeout")), 8000);
        }),
      ]);
    }
  } catch (error) {
    document.documentElement.classList.add("font-fallback");
  } finally {
    clearTimeout(timeout);
    render();
    document.documentElement.classList.remove("fonts-loading");
    $("fontLoader").remove();
    fitInk();
  }
}
startPresentation();
