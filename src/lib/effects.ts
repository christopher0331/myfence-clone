// Visual effects helpers for small celebratory UI moments
// Uses design system HSL variables via getComputedStyle

export const burstFirework = (x?: number, y?: number) => {
  try {
    const cx = x ?? window.innerWidth / 2;
    const cy = y ?? window.innerHeight / 2;

    const canvas = document.createElement('canvas');
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.right = '0';
    canvas.style.bottom = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';

    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) { document.body.removeChild(canvas); return; }
    ctx.scale(dpr, dpr);

    const css = getComputedStyle(document.documentElement);
    const hsl = (name: string) => {
      const v = css.getPropertyValue(name).trim();
      return v ? `hsl(${v})` : 'hsl(0 0% 100%)';
    };
    const colors = [hsl('--primary'), hsl('--secondary'), hsl('--accent')];

    const particles = Array.from({ length: 28 }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      return {
        x: cx, y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        radius: 1 + Math.random() * 2,
      } as { x:number; y:number; vx:number; vy:number; alpha:number; color:string; radius:number };
    });

    const start = performance.now();
    const duration = 800;
    function tick(now: number) {
      const t = (now - start) / duration;
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.vy += 0.02; // gravity
        p.x += p.vx;
        p.y += p.vy;
        p.alpha = Math.max(0, 1 - t);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      if (t < 1) requestAnimationFrame(tick);
      else {
        ctx.globalAlpha = 1;
        document.body.removeChild(canvas);
      }
    }
    requestAnimationFrame(tick);
  } catch {
    // no-op
  }
};

export const popEmoji = (x: number, y: number, emoji = '🪵') => {
  try {
    const span = document.createElement('span');
    span.textContent = emoji;
    span.style.position = 'fixed';
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    span.style.transform = 'translate(-50%, -50%) scale(0.9)';
    span.style.transition = 'transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms ease-out';
    span.style.zIndex = '10000';
    span.style.pointerEvents = 'none';
    span.style.fontSize = '18px';
    span.style.filter = 'drop-shadow(0 2px 6px rgba(0,0,0,0.25))';
    span.style.opacity = '1';
    document.body.appendChild(span);

    requestAnimationFrame(() => {
      span.style.transform = 'translate(-50%, -90%) scale(1)';
      span.style.opacity = '0';
    });

    const remove = () => span.remove();
    span.addEventListener('transitionend', remove, { once: true });
    setTimeout(remove, 800);
  } catch {
    // no-op
  }
};
