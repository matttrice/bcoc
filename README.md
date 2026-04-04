# Berthoud Church of Christ

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

## Deployment Notes

This project is configured as a static SvelteKit site using `@sveltejs/adapter-static`.

- Dedicated domain root deployment: use the default config (no `BASE_PATH` env var)
- Subpath deployment (optional): set `BASE_PATH` at build time, e.g. `BASE_PATH=/bcoc npm run build`

## Contact Form Setup

Forms post directly to Formspree from the client.

1. Create forms in Formspree
2. Replace `YOUR_FORM_ID_*` values in `src/lib/data/forms.json`
3. Build and deploy
