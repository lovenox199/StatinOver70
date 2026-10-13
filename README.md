# Statins After 70 — Autumn Journal Club

A self-contained interactive presentation. No build step, package installation, API key, or backend is required.

## Publish on GitHub Pages

1. Create a GitHub repository (for example, `statins-after-70`).
2. Extract this ZIP. Upload the **contents** of this folder to the repository root: `index.html`, the entire `assets` folder, `.nojekyll`, and this README. Do not upload just the ZIP or nest everything inside another folder.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/(root)**, then **Save**.
6. After deployment, the Pages settings show your website link, normally `https://YOUR-USERNAME.github.io/statins-after-70/`.

GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Files

- `index.html`: all presentation content, CSS, JavaScript, pen tools, reveals, and autumn physics.
- `assets/`: background PNGs, autumn artwork, self-hosted fonts, and font license files. Keep filenames and relative paths unchanged.
- `.nojekyll`: tells GitHub Pages to serve the static files directly.

## Preview and edit

Open `index.html` in a browser. For a local server, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

Edit the `slides` array in `index.html` to change slide content. CSS appears in the style blocks; interaction code follows the slide data. Fonts and images are bundled locally. Links to papers require internet access.

## Presenter behavior

Reveal cards stay revealed during the current browser session. Drawings stay with their slides. The autumn pile persists when navigating away from the takeaway slide and back. Reloading the page resets session state. Toolbar buttons provide pen, undo, clear ink, outline, notes, and fullscreen controls.

## Credits

Background design: Slidesgo / Freepik, from the supplied Fall Forest template. Additional autumn artwork was supplied by the presentation owner. Font license notices are retained in `assets`. Original artwork and font rights remain with their respective owners; this export does not grant new third-party asset rights.
