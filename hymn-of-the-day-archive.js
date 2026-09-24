(() => {
  const requestedPage = new URLSearchParams(location.search).get("page");
  const path = requestedPage
    ? `${requestedPage.toLowerCase()}.html`
    : (location.pathname.split("/").pop() || "index.html").toLowerCase();

  if (path !== "hymn-of-the-day.html") return;

  const entries = window.hymnOfTheDayEntries || [];
  const archive = document.querySelector(".hymn-archive");
  const results = document.querySelector("#hymn-archive-results");
  const count = document.querySelector("#hymn-archive-count");
  const search = document.querySelector("#hymn-archive-search");
  const dayResults = document.querySelector("#hymn-day-results");

  if (!archive || !results || !count || !search || !dayResults) return;

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

  const dateLabel = entry => fixedDate(entry) || entry.occasion || "Movable date";

  const sortKey = entry => {
    const rule = (entry.dates || [])[0];
    if (!rule) return 9999;
    if (rule.type === "fixed") return rule.month * 100 + rule.day;
    if (rule.month) return rule.month * 100 + 50;
    return 9999;
  };

  const addRecordingButtons = () => {
    dayResults.querySelectorAll(".hymn-entry").forEach(card => {
      if (card.querySelector(".hymn-recording-link")) return;
      const title = card.querySelector("h2")?.textContent?.trim();
      const entry = entries.find(item => item.title === title);
      if (!entry?.recording) return;

      const tune = [...card.querySelectorAll("p")].find(p =>
        p.textContent.trim().startsWith("Recommended tune:")
      );

      const holder = document.createElement("div");
      holder.className = "downloads hymn-recording-link";
      holder.innerHTML = `<a class="button secondary" href="${escapeHTML(entry.recording)}" target="_blank" rel="noopener">Listen to recording</a>`;

      if (tune) tune.insertAdjacentElement("afterend", holder);
      else card.querySelector("h2")?.insertAdjacentElement("afterend", holder);
    });
  };

  const observer = new MutationObserver(addRecordingButtons);
  observer.observe(dayResults, { childList: true, subtree: true });
  addRecordingButtons();

  archive.querySelector("h2").textContent = "PDF Archive";
  const eyebrow = archive.querySelector(".eyebrow");
  if (eyebrow) eyebrow.textContent = "Complete archive";

  const label = archive.querySelector('label[for="hymn-archive-search"]');
  if (label) label.textContent = "Search the archive";
  search.placeholder = "Search dates, feasts, hymn titles, authors, and tags…";

  const render = () => {
    const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);

    const matches = entries
      .filter(entry => entry.pdf)
      .filter(entry => {
        const haystack = [
          dateLabel(entry),
          entry.title,
          entry.credit,
          entry.occasion,
          ...(entry.tags || [])
        ].filter(Boolean).join(" ").toLowerCase();

        return terms.every(term => haystack.includes(term));
      })
      .sort((a, b) => sortKey(a) - sortKey(b));

    count.textContent = `Showing ${matches.length} of ${entries.filter(entry => entry.pdf).length} ${matches.length === 1 ? "entry" : "entries"}`;

    results.innerHTML = matches.length
      ? matches.map(entry => `
          <article class="resource-item">
            <div>
              <p class="eyebrow">${escapeHTML(dateLabel(entry))} · ${escapeHTML(entry.occasion)}</p>
              <h2>${escapeHTML(entry.title)}</h2>
              <p>${escapeHTML(entry.credit)}</p>
            </div>
            <div class="downloads">
              ${entry.recording ? `<a class="button secondary" href="${escapeHTML(entry.recording)}" target="_blank" rel="noopener">Listen</a>` : ""}
              <a class="button secondary" href="${escapeHTML(entry.pdf)}" target="_blank" rel="noopener">View PDF</a>
            </div>
          </article>
        `).join("")
      : `<p class="note">No archive entries match that search.</p>`;
  };

  search.addEventListener("input", render);
  render();
})();
