customElements.define(`starlight-openapi-content-picker`, class extends HTMLElement {
	#e;
	constructor() {
		super();
		let e = this.querySelector(`:scope > .sl-openapi-content-picker-select > select`);
		e && e.addEventListener(`change`, (e) => {
			e.currentTarget instanceof HTMLSelectElement && this.#t(e.currentTarget.value);
		}), this.#e = [...this.querySelectorAll(`:scope > [role="tabpanel"]`)];
	}
	#t(e) {
		for (let t of this.#e) t.hidden = t.dataset.openapiContentType !== e;
	}
});
