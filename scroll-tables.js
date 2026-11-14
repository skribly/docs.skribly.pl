const updateTable = (table) => {
	if (table.scrollWidth > table.clientWidth + 1) table.setAttribute("tabindex", "0");
	else table.removeAttribute("tabindex");
};
const tableObserver = new ResizeObserver((entries) => {
	for (const entry of entries) updateTable(entry.target);
});
for (const table of document.querySelectorAll(".sl-markdown-content table")) tableObserver.observe(table);
