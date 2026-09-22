(function () {
  const entries = window.hymnOfTheDayEntries || [];

  const display = document.getElementById("hymn-selected");
  const archive = document.getElementById("hymn-pdf-archive");
  const select = document.getElementById("hymn-date-select");

  if (!display || !archive || !entries.length) return;

  function formatDate(entry) {
    return new Date(2000, entry.month - 1, entry.day).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric"
    });
  }

  function entryHtml(entry) {
    const verses = entry.verses
      .map((verse, index) => `<div class="hymn-verse"><span class="verse-number">${index + 1}.</span><span>${escapeHtml(verse).replace(/\n/g, "<br>")}</span></div>`)
      .join("");

    const reflection = entry.reflection
      .map(paragraph => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");

    return `
      <article class="hymn-entry">
        <p class="hymn-date">${formatDate(entry)} · ${escapeHtml(entry.feast)}</p>
        <h2>${escapeHtml(entry.title)}</h2>
        <div class="hymn-meta">
          <span><strong>Text:</strong> ${escapeHtml(entry.author)}${entry.year ? `, ${escapeHtml(entry.year)}` : ""}</span>
          <span><strong>Meter:</strong> ${escapeHtml(entry.meter)}</span>
          <span><strong>Suggested Tune:</strong> ${escapeHtml(entry.tune)}</span>
        </div>
        <div class="hymn-text">${verses}</div>
        <section class="hymn-reflection">
          <h3>Reflection (${escapeHtml(entry.feast)})</h3>
          ${reflection}
        </section>
        <p class="hymn-pdf-link"><a href="${entry.pdf}" target="_blank" rel="noopener">View formatted PDF</a></p>
      </article>`;
  }

  function renderEntry(id, updateHash = true) {
    const entry = entries.find(item => item.id === id) || entries[0];
    display.innerHTML = entryHtml(entry);
    if (select) select.value = entry.id;
    if (updateHash) history.replaceState(null, "", `#${entry.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderArchive() {
    const sorted = [...entries].sort((a, b) => (a.month * 100 + a.day) - (b.month * 100 + b.day));
    archive.innerHTML = sorted.map(entry => `
      <div class="pdf-archive-item">
        <button type="button" class="archive-select" data-hymn-id="${entry.id}">
          <span class="archive-date">${formatDate(entry)}</span>
          <span class="archive-title">${escapeHtml(entry.title)}</span>
          <span class="archive-feast">${escapeHtml(entry.feast)}</span>
        </button>
        <a class="archive-pdf" href="${entry.pdf}" target="_blank" rel="noopener">PDF</a>
      </div>`).join("");

    archive.querySelectorAll("[data-hymn-id]").forEach(button => {
      button.addEventListener("click", () => renderEntry(button.dataset.hymnId));
    });
  }

  function populateSelect() {
    if (!select) return;
    select.innerHTML = entries
      .map(entry => `<option value="${entry.id}">${formatDate(entry)} — ${escapeHtml(entry.feast)}</option>`)
      .join("");
    select.addEventListener("change", () => renderEntry(select.value));
  }

  function chooseInitialEntry() {
    const hashId = location.hash.replace("#", "");
    if (entries.some(entry => entry.id === hashId)) return hashId;

    const now = new Date();
    const todayId = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    if (entries.some(entry => entry.id === todayId)) return todayId;

    const todayNumber = (now.getMonth() + 1) * 100 + now.getDate();
    const upcoming = [...entries]
      .sort((a, b) => (a.month * 100 + a.day) - (b.month * 100 + b.day))
      .find(entry => (entry.month * 100 + entry.day) >= todayNumber);

    return (upcoming || entries[0]).id;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  populateSelect();
  renderArchive();
  renderEntry(chooseInitialEntry(), false);
})();
