import { r as e, t } from "./motion.BJZ2ChkW.js";
function n(e = window) {
	return e.CSS?.supports?.(`animation-timeline: view()`) ?? !1;
}
function r(e) {
	let t = Number.parseFloat(e.style.getPropertyValue(`--sk-reveal-start`));
	return Number.isFinite(t) ? Math.round(t / 6) * 60 : 0;
}
function i(i = document, a = window) {
	if (n(a) || !e(a) || a.IntersectionObserver === void 0) return;
	let o = [...i.querySelectorAll(`[data-sk-reveal]:not([data-sk-reveal-state])`)], s = new a.IntersectionObserver((e) => {
		for (let t of e) t.isIntersecting && t.target instanceof HTMLElement && (t.target.style.transitionDelay = `${r(t.target)}ms`, t.target.dataset.skRevealState = `done`, s.unobserve(t.target));
	}, {
		rootMargin: `0px 0px -10% 0px`,
		threshold: .05
	});
	for (let e of o) e.getBoundingClientRect().top < a.innerHeight ? e.dataset.skRevealState = `done` : (e.dataset.skRevealState = `pending`, s.observe(e));
	a.addEventListener(t, () => {
		if (!e(a)) {
			s.disconnect();
			for (let e of o) e.dataset.skRevealState = `done`;
		}
	});
}
i();
