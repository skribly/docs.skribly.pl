customElements.define(`sl-openapi-snippet-picker`, class extends HTMLElement {
	#e;
	#t;
	constructor() {
		super(), this.#t = this.querySelector(`#sl-openapi-snippet-status`), this.querySelector(`select`)?.addEventListener(`change`, (e) => {
			if (!(e.currentTarget instanceof HTMLSelectElement)) return;
			this.#e ??= [...document.querySelectorAll(`div.sl-openapi-snippet`)];
			let t = e.currentTarget.value;
			for (let e of this.#e) e.toggleAttribute(`hidden`, e.dataset.openapiSnippetId !== t);
			this.#t && (this.#t.textContent = `Showing ${e.currentTarget.selectedOptions[0]?.textContent?.trim()} code sample.`), typeof localStorage < `u` && localStorage.setItem(`starlight-openapi-snippet-id`, t);
		});
	}
});
