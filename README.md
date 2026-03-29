# multi-hub

A unified Angular dashboard that brings together multiple web apps — job search, movie discovery, and more — under a single interface.

**Live site:** https://gigumbrajaguru.github.io/multi-hub/

## Features

- **Job Search** — Browse and filter job listings with details panel
- **Movie Watch** — Search movies and TV series by title
- **Extensible** — News, Shop, and Research modules ready to be wired in

## Tech Stack

- Angular 13 + Angular Material (Deep Purple/Amber theme)
- RxJS, FormsModule, HttpClient
- Express.js (for Heroku deployment)

## Getting Started

```bash
npm install
ng serve          # dev server at http://localhost:4200
```

## Build

```bash
# Standard production build (for Heroku / local server)
npm run build

# GitHub Pages build — outputs to docs/ with correct base href
npm run build:gh-pages
```

## Deploy to GitHub Pages

1. Run `npm run build:gh-pages`
2. Commit the generated `docs/` folder and push to `main`
3. In repo **Settings → Pages**, set source to **main branch / docs folder**
4. Site will be live at `https://gigumbrajaguru.github.io/multi-hub/`

## Heroku Deploy

The `heroku-postbuild` script runs `ng build --prod` automatically.
`server.js` serves the built files via Express on `process.env.PORT`.
