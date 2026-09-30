"use client";

import { useEffect, useRef, useState } from "react";
import { estilosCard, site } from "@/content/site";

// Comportamento portado do Claude Design: revelação ao rolar, parallax, frase palavra a
// palavra, cards empilhados, carrossel horizontal preso ao scroll e marquee.
export function useLanding() {
  const [open, setOpen] = useState(0);
  const updateRef = useRef<() => void>(() => {});

  useEffect(() => {
    const k = site.parallax;
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const $ = <T extends HTMLElement = HTMLElement>(s: string) => document.querySelector<T>(s);
    const $$ = <T extends HTMLElement = HTMLElement>(s: string) => Array.from(document.querySelectorAll<T>(s));

    const update = () => {
      const vh = window.innerHeight, vw = window.innerWidth;

      const nav = $("[data-nav]");
      if (nav) {
        const s = window.scrollY > 40;
        nav.style.background = s ? "rgba(247,245,242,.82)" : "transparent";
        nav.style.backdropFilter = s ? "blur(14px)" : "none";
        nav.style.borderBottomColor = s ? "#E6DCCF" : "transparent";
      }
      const fl = $("[data-float]");
      if (fl) {
        const on = window.scrollY > vh * 0.9 && document.body.scrollHeight - window.scrollY - vh > vh * 0.9;
        fl.style.opacity = on ? "1" : "0";
        fl.style.pointerEvents = on ? "auto" : "none";
        fl.style.transform = on ? "none" : "translateY(16px)";
      }

      $$("[data-speed]").forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < -vh || r.top > vh * 2) return;
        const c = r.top + r.height / 2 - vh / 2;
        el.style.transform = `translate3d(0,${(c * -parseFloat(el.dataset.speed!) * k).toFixed(1)}px,0)`;
      });

      const ws = $("[data-words]");
      if (ws) {
        const r = ws.getBoundingClientRect();
        const p = clamp(-r.top / (r.height - vh), 0, 1);
        const words = ws.querySelectorAll<HTMLElement>("[data-word]");
        const n = words.length;
        words.forEach((w, i) => { w.style.color = (i + 0.5) / n < p * 1.15 ? "#111111" : "#D2C8BB"; });
      }

      const vcards = $$("[data-vcard]");
      vcards.forEach((c, i) => {
        const next = vcards[i + 1];
        if (!next) { c.style.transform = "none"; return; }
        const d = next.getBoundingClientRect().top - c.getBoundingClientRect().top;
        const p = clamp(1 - d / (vh * 0.6), 0, 1);
        c.style.transform = `scale(${(1 - p * 0.05).toFixed(4)})`;
        c.style.filter = `brightness(${(1 - p * 0.12).toFixed(3)})`;
      });

      const hs = $("[data-hstack]");
      if (hs) {
        const r = hs.getBoundingClientRect();
        const p = clamp(-r.top / (r.height - vh), 0, 1);
        const cards = hs.querySelectorAll<HTMLElement>("[data-hcard]");
        const n = cards.length;
        if (n) {
          const seg = p * (n - 1) * 1.08;
          const w = cards[0].offsetWidth;
          const base = (vw - w) / 2;
          cards.forEach((c, i) => {
            const enter = i === 0 ? 1 : ease(clamp(seg - (i - 1), 0, 1));
            const depth = clamp(seg - i, 0, 3);
            const x = base + (1 - enter) * (vw - base + 60) - depth * (vw < 700 ? 10 : 30);
            c.style.transform = `translate3d(${x.toFixed(1)}px,0,0) scale(${(1 - depth * 0.04).toFixed(4)})`;
            c.style.zIndex = String(i + 1);
          });
          const idx = clamp(Math.round(seg), 0, n - 1);
          const cnt = hs.querySelector("[data-hcount]");
          if (cnt) cnt.textContent = String(idx + 1).padStart(2, "0");
          const bar = hs.querySelector<HTMLElement>("[data-hbar]");
          if (bar) bar.style.width = (clamp(seg / (n - 1), 0, 1) * 100).toFixed(1) + "%";
        }
      }

      const mq = $("[data-marquee]");
      if (mq) {
        const r = mq.parentElement!.getBoundingClientRect();
        const t = (vh - r.top) / (vh + r.height);
        const span = Math.max(0, mq.scrollWidth - vw);
        mq.style.transform = `translate3d(${(-clamp(t, 0, 1) * span * Math.min(1, k || 0.001)).toFixed(1)}px,0,0)`;
      }
    };

    let raf = 0;
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); });
    };
    updateRef.current = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = $$("[data-reveal]");
    let io: IntersectionObserver | undefined;
    if (!reduce) {
      els.forEach((el) => {
        const d = parseInt(el.dataset.reveal || "0", 10);
        el.style.opacity = "0";
        el.style.transform = "translate3d(0,28px,0)";
        el.style.transition = `opacity 1.1s cubic-bezier(.2,.7,.2,1) ${d * 0.11}s, transform 1.1s cubic-bezier(.2,.7,.2,1) ${d * 0.11}s`;
      });
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = e.target as HTMLElement;
            t.style.opacity = "1";
            t.style.transform = "none";
            io!.unobserve(t);
          }
        }),
        { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
      );
      requestAnimationFrame(() => els.forEach((el) => io!.observe(el)));
    }
    update();
    const t = setTimeout(update, 400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io?.disconnect();
      clearTimeout(t);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Recalcula as posições quando o FAQ abre/fecha (muda a altura da página).
  useEffect(() => { updateRef.current(); }, [open]);

  const num = site.whatsapp.replace(/\D/g, "");
  const waHref = num
    ? `https://wa.me/${num}?text=${encodeURIComponent(site.whatsappMensagem)}`
    : site.whatsappLink;

  const procs = site.procedimentos.map((p) => ({ ...estilosCard[p.estilo as keyof typeof estilosCard], ...p }));
  const faqs = site.faqs.map((f, i) => {
    const isOpen = open === i;
    return {
      ...f,
      rows: isOpen ? "1fr" : "0fr",
      rot: isOpen ? "rotate(45deg)" : "none",
      toggle: () => setOpen(isOpen ? -1 : i),
    };
  });

  return {
    waHref,
    procs,
    faqs,
    words: site.frase.split(" "),
    headlineA: site.headline === "A",
    headlineB: site.headline === "B",
    showPending: site.mostrarPendencias,
  };
}
