# Jason Senungi · Portfolio

My portfolio website: a map of my route from MBO to my own projects, with Snyptly, my internships at XML Hosting and Learn & Earn, and my HBO projects (LucaStars Webshop and Dokkie).

## Tech

- **TypeScript** with object-oriented classes, bundled with **Vite**
- Plain HTML and CSS, no framework
- Hosted on Vercel

## Structure

```
index.html                  the page content, including the map (as SVG)
src/main.ts                 starting point: creates an object of every class
src/classes/
  ThemeToggle.ts            dark / light mode
  Gallery.ts                screenshot sliders
  Lightbox.ts               opens a screenshot full size
  ScrollTracker.ts          highlights the section you are looking at
src/data/content.ts         the screenshots and captions for the galleries
src/styles.css              all styles, with the light and dark colours at the top
public/img/                 screenshots
```

## Run it locally

```bash
npm install
npm run dev
```

Build for production with `npm run build` (output in `dist/`).
