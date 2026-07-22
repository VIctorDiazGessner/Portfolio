// Lightweight scroll-reveal: adds `.is-visible` to `.reveal` elements as they
// enter the viewport. No framework, ~1KB, respects reduced-motion via CSS.
// Re-run on Astro view transitions / page loads.
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  els.forEach((el) => io.observe(el));
}

initReveal();
document.addEventListener("astro:page-load", initReveal);
