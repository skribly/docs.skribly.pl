var e = class extends HTMLElement {
	constructor() {
		super();
		let e = matchMedia(`(min-width: 50em)`), t = document.querySelector(`[popovertarget="starlight__sidebar"]`), n = () => {
			this.popover = e.matches ? null : `auto`;
		};
		n(), e.addEventListener(`change`, n), this.addEventListener(`toggle`, (e) => {
			let n = e.newState === `open`;
			t?.setAttribute(`aria-expanded`, String(n));
			for (let e of document.querySelectorAll(`#content, .right-sidebar-container, .sk-skip-link, .sk-site-footer`)) e.toggleAttribute(`inert`, n);
		});
	}
};
customElements.define(`sl-sidebar-pane`, e);
