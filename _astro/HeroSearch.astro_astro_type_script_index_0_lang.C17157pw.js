import { a as e, i as t, r as n, t as r } from "./search.Krxlp6fR.js";
function i(e, t = document) {
	return e.slice(0, 5).map((e) => {
		let n = t.createElement(`li`), i = t.createElement(`a`);
		i.href = e.url, i.className = `sk-hero-search__hit`;
		let a = t.createElement(`span`);
		a.className = `sk-hero-search__hit-title`, a.textContent = e.title;
		let o = t.createElement(`span`);
		return o.className = `sk-hero-search__hit-text`, o.append(r(e.excerpt, t)), i.append(a, o), n.append(i), n;
	});
}
function a(n, r, a) {
	let o = n.querySelector(`form`), s = n.querySelector(`[data-sk-hero-search-input]`), c = n.querySelector(`[data-sk-hero-search-results]`), l = n.querySelector(`[data-sk-hero-search-status]`);
	if (!o || !s || !c || !l) return;
	let u = n.dataset, d = n.dataset.pagefind ?? `/pagefind/pagefind.js`, f = null, p = 0, m = () => [...c.querySelectorAll(`a`)], h = () => {
		c.hidden = !0;
	}, g = () => (f ??= r(d), f);
	s.addEventListener(`focus`, () => void g().catch(() => void 0), { once: !0 }), s.addEventListener(`input`, async () => {
		let n = s.value.trim(), r = ++p;
		if (n.length < 2) {
			c.replaceChildren(), l.textContent = ``, h();
			return;
		}
		l.textContent = u.searchLoading;
		let o;
		try {
			o = await t(await g(), n, 5);
		} catch {
			if (f = null, r !== p) return;
			c.replaceChildren(), l.textContent = u.searchOffline, h();
			return;
		}
		r === p && o !== null && (c.replaceChildren(...i(o, a)), l.textContent = o.length ? e(o.length, u) : u.searchEmpty, c.hidden = o.length === 0);
	}), o.addEventListener(`submit`, (e) => {
		let t = m()[0];
		!c.hidden && t && (e.preventDefault(), t.focus());
	}), n.addEventListener(`keydown`, (e) => {
		let t = m(), n = t.indexOf(a.activeElement);
		e.key === `Escape` && !c.hidden ? (h(), s.focus(), e.preventDefault()) : e.key === `ArrowDown` && !c.hidden && t.length ? (t[Math.min(n + 1, t.length - 1)]?.focus(), e.preventDefault()) : e.key === `ArrowUp` && n >= 0 && (n === 0 ? s.focus() : t[n - 1]?.focus(), e.preventDefault());
	}), o.addEventListener(`focusout`, (e) => {
		let t = e.relatedTarget;
		t && o.contains(t) || h();
	});
}
function o(e, t, n) {
	let r = e.querySelector(`[data-sk-hero-copy]`), i = e.querySelector(`[data-sk-hero-command]`), a = e.querySelector(`[data-sk-hero-copied]`);
	if (!r || !i || !a) return;
	let o;
	r.addEventListener(`click`, async () => {
		try {
			await t(i.textContent?.trim() ?? ``), a.textContent = r.dataset.copied ?? ``, clearTimeout(o), o = setTimeout(() => a.textContent = ``, 2500);
		} catch {
			let e = n.createRange();
			e.selectNodeContents(i), n.getSelection()?.removeAllRanges(), n.getSelection()?.addRange(e);
		}
	});
}
function s(e, t = {}) {
	if (`skReady` in e.dataset) return;
	e.dataset.skReady = ``;
	let r = t.doc ?? e.ownerDocument, i = t.copy ?? ((e) => r.defaultView?.navigator.clipboard.writeText(e) ?? Promise.reject());
	a(e, t.load ?? n, r), o(e, i, r);
}
for (let e of document.querySelectorAll(`[data-sk-hero-search]`)) s(e);
