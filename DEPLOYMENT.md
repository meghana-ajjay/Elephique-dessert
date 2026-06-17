# Elephique Bakery Website Deployment

## Local setup

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://127.0.0.1:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to Netlify

1. Push this project to GitHub.
2. Create a new Netlify site from the repository.
3. Use `npm run build` as the build command.
4. Use `dist` as the publish directory.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the framework preset as Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Content updates

Menu items, gallery images, navigation labels, and testimonials live in `src/data/content.js`.
Section layouts live in `src/components/`.
The client logo is stored at `public/elephique-logo.jpeg`.
