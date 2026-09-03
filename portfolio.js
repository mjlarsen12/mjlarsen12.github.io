/* Pages CMS edits content/*.json. Rendering uses textContent, never HTML from uploads. */
(() => {
  'use strict';
  const root = new URL('.', document.baseURI);
  function assetURL(value, kind) {
    if (typeof value !== 'string' || !value.trim()) return null;
    const raw = value.trim();
    if (/^[a-z][a-z\d+.-]*:/i.test(raw) || raw.startsWith('//')) return null;
    try {
      const url = new URL(raw, root);
      if (url.origin !== root.origin || url.search || url.hash) return null;
      const decoded = decodeURIComponent(url.pathname);
      const valid = kind === 'image'
        ? /\/media\/images\/[^/]+\.(png|jpe?g|webp)$/i
        : /\/files\/[^/]+\.pdf$/i;
      return valid.test(decoded) ? url.href : null;
    } catch { return null; }
  }
  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function renderDocuments(container, data) {
    if (!data || !Array.isArray(data.documents)) throw new Error('Invalid document collection');
    const cards = [];
    for (const item of data.documents) {
      const url = assetURL(item?.file, 'pdf');
      if (!url || typeof item.title !== 'string' || !item.title.trim()) continue;
      const card = element('article', 'card');
      if (typeof item.category === 'string' && item.category.trim()) card.append(element('p', 'eyebrow', item.category));
      card.append(element('h3', '', item.title));
      if (typeof item.description === 'string') card.append(element('p', '', item.description));
      const link = element('a', 'textlink', 'Read PDF');
      link.href = url;
      link.setAttribute('aria-label', `Read ${item.title} (PDF)`);
      card.append(link);
      cards.push(card);
    }
    if (!cards.length) cards.push(element('p', 'resource-message', 'No documents are published in this collection yet.'));
    container.replaceChildren(...cards);
  }
  function renderPhoto(figure, data) {
    const photo = data?.[figure.dataset.photo];
    const url = assetURL(photo?.image, 'image');
    if (!url) return;
    const img = figure.querySelector('img');
    const caption = figure.querySelector('figcaption');
    img.alt = typeof photo.alt === 'string' && photo.alt.trim() ? photo.alt : 'Portfolio photograph';
    caption.textContent = typeof photo.caption === 'string' ? photo.caption : '';
    const panel = figure.dataset.photo === 'home' ? document.querySelector('.profile-panel') : null;
    img.onload = () => { figure.hidden = false; if (panel) panel.hidden = true; };
    img.onerror = () => { figure.hidden = true; if (panel) panel.hidden = false; };
    img.src = url;
  }
  async function readContent(name) {
    const response = await fetch(new URL(`content/${name}.json`, root), {cache: 'no-cache'});
    if (!response.ok) throw new Error(`Content unavailable: ${name}`);
    return response.json();
  }
  async function start() {
    const figures = [...document.querySelectorAll('[data-photo]')];
    if (figures.length) {
      try {
        const photos = await readContent('photos');
        figures.forEach(figure => renderPhoto(figure, photos));
      } catch { /* Preserve the existing text layout if photos are unavailable. */ }
    }
    await Promise.all([...document.querySelectorAll('[data-resources]')].map(async container => {
      try {
        renderDocuments(container, await readContent(container.dataset.resources));
      } catch {
        // Keep the original usable document link if the collection cannot be loaded.
        const message = element('p', 'resource-message', 'The latest document list could not be loaded. Please refresh to try again.');
        container.prepend(message);
      }
    }));
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = {assetURL, renderDocuments, renderPhoto};
  else start();
})();
