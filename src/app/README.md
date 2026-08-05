# App routes

This folder uses the Next.js App Router.

- A folder containing `page.js` creates a public page URL.
- A folder containing `route.js` creates a backend endpoint.
- `layout.js` owns the shared document and site layout.
- `globals.css` owns global styles.
- `not-found.js` and `loading.js` own global fallback states.

Do not move page folders solely to make the tree look grouped: their location
defines their URL. See [the full route map](../../docs/PROJECT_STRUCTURE.md)
before adding, renaming, or deleting a route.

Feature families that already belong together are nested:

- `instant-loan/`
- `insurance/`
- `pan-card/`
- `service-payment/`
- `api/`

Standalone pages remain at the app root because their URL is standalone.
