(() => {
  const requestedPage = new URLSearchParams(location.search).get("page");
  const path = requestedPage
    ? `${requestedPage.toLowerCase()}.html`
    : (location.pathname.split("/").pop() || "index.html").toLowerCase();

  if (path !== "hymn-of-the-day.html") return;

  const entries = (window.hymnOfTheDayEntries || []).filter(entry => entry.pdf);
  const archive = document.querySelector(".hymn-archive");
  const results = document.querySelector("#hymn-archive-results");
  const count = document.querySelector("#hymn-archive-count");
  const search = document.querySelector("#hymn-archive-search");

  if (!archive || !results || !count || !search) return;

  const escapeHTML = value =>
    String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[character]));

  const fixedDate = entry => {
    const rule = (entry.dates || []).find(rule => rule.type === "fixed");
    if (!rule) return "";
    const date = new Date(2000, rule.month - 1, rule.day);
    return date.toLocaleDateString(undefined, { month: "long", day: "numeric" });
  };

  const sortKey = entry => {
    const rule = (entry.dates || []).find(rule => rule.type === "fixed");
    return rule ? rule.month * 100 + rule.day : 9999;
  };

  archive.querySelector("h2").textContent = "PDF Archive";
  const eyebrow = archive.querySelector(".eyebrow");
  if (eyebrow) eyebrow.textContent = "Complete archive";

  const label = archive.querySelector('label[for="hymn-archive-search"]');
  if (label) label.textContent = "Search PDFs";
  search.placeholder = "Search dates, feasts, hymn titles, authors, and tags…";

  const render = () => {
    const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);

    const matches = entries
      .filter(entry => {
        const haystack = [
          fixedDate(entry),
          entry.title,
          entry.credit,
          entry.occasion,
          ...(entry.tags || [])
        ].filter(Boolean).join(" ").toLowerCase();

        return terms.every(term => haystack.includes(term));
      })
      .sort((a, b) => sortKey(a) - sortKey(b));

    count.textContent = `Showing ${matches.length} of ${entries.length} ${entries.length === 1 ? "PDF" : "PDFs"}`;

    results.innerHTML = matches.length
      ? matches.map(entry => `
          <article class="resource-item">
            <div>
              <p class="eyebrow">${escapeHTML(fixedDate(entry))} · ${escapeHTML(entry.occasion)}</p>
              <h2>${escapeHTML(entry.title)}</h2>
              <p>${escapeHTML(entry.credit)}</p>
            </div>
            <a class="button secondary" href="${escapeHTML(entry.pdf)}" target="_blank" rel="noopener">
              View PDF
            </a>
          </article>
        `).join("")
      : `<p class="note">No PDFs match that search.</p>`;
  };

  search.addEventListener("input", render);
  render();
})();
