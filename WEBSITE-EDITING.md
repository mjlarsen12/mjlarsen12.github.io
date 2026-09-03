# Updating your portfolio without HTML

This update keeps your website on GitHub Pages at https://mjlarsen12.github.io . Pages CMS is a separate editing dashboard; visitors do not need an account, and the dashboard does not change your website address.

## One-time setup

1. Extract `Marcus-Larsen-Website-Editor-Update.zip`.
2. Open your `mjlarsen12.github.io` repository on GitHub.
3. Choose **Add file > Upload files**. Upload the extracted contents, including the `content`, `files`, and `media` folders, plus `.pages.yml` and `.nojekyll`. Keep those folder names. The HTML files belong in the repository's main folder, not inside another enclosing folder.
4. Choose **Commit changes**. This publishes the updated site using your existing GitHub Pages settings. In the repository, check that `.pages.yml`, `prayer-in-song.html`, `portfolio.js`, and the `content` folder appear.
5. Visit https://app.pagescms.org and sign in with GitHub. Follow its GitHub App connection prompts, granting access to this website repository. You do not need to grant access to unrelated repositories.
6. Open `mjlarsen12.github.io` and the `main` branch. The configuration already exists: do not replace it with a starter configuration. You should see **Website photos**, **Writing page documents**, and **Prayer in Song resources**.

The configuration and site code have been checked locally. The authenticated Pages CMS connection must still be completed in your GitHub account; it has not been tested through your account.

## Add or change a photo

1. Open **Website photos**.
2. Find the home portrait, Prayer in Song teaching photo, or data-page car photo. Optional About and Projects photos are also available.
3. Choose or upload a JPG, JPEG, PNG, or WebP photo.
4. Describe the photo for screen readers and optionally add a caption.
5. Save. Allow GitHub Pages time to publish, then refresh your website.

No photos have been included yet. Until a photo is selected, the page retains its text layout rather than displaying a broken image. The home portrait uses a vertical crop; the other pages show the full photo. Use reasonably sized images (for example, about 1600 pixels wide) to keep pages fast. PDFs are not automatically compressed.

## Add a PDF

1. Open **Writing page documents** or **Prayer in Song resources**.
2. Add an item to **Documents**.
3. Enter its title, short description, and optional category (such as Hymn, Chart, Essay, or Handout).
4. Select or upload the PDF.
5. Save. The website adds a document card with a working PDF link automatically.

To feature one PDF in both places, add an item in each list and select the same existing PDF. Reorder the list to change display order. Remove an item to remove its card from that page. Removing the card does not delete the underlying uploaded PDF; manage unused files separately in Media. Because GitHub Pages and the repository are public, uploaded files and changes saved to `main` are public. This editor is for published content, not private drafts.

The website fetches its current document lists when a visitor loads the page. JavaScript is needed to see subsequent CMS updates; the original manuscript link remains as a basic fallback. After saving an update, a publication delay and browser refresh may be needed.

## What this editor covers

- Homepage portrait, Prayer in Song teaching photo, data-page car photo, and optional About/Projects photos.
- Photo descriptions and captions.
- PDF titles, descriptions, categories, uploads, and ordering on Writing and Prayer in Song.

It is not a drag-and-drop layout editor. Other page text and layout still live in the HTML/CSS files and can be revised with assistance. Website hosting remains with GitHub Pages. The free Pages CMS service is provided by a separate project.

Keep this update as a backup. After editing through Pages CMS, do not re-upload the old `content/*.json` files: those would replace your newer photo choices and document lists.

Official references:
- https://pagescms.org/ (free hosted editor)
- https://pagescms.org/docs/quick-start/ (GitHub sign-in and app connection)
- https://pagescms.org/docs/configuration/media/ (media uploads)
- https://pagescms.org/docs/configuration/fields/file/ (PDF fields)
