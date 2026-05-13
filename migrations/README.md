# Contentful Migrations

Migrations are run with [`contentful-migration`](https://github.com/contentful/contentful-migration) (already in devDependencies).

## Setup

Make sure your `.env.local` contains:

```
CONTENTFUL_SPACE_ID=...
CONTENTFUL_MANAGEMENT_TOKEN=...
CONTENTFUL_ENVIRONMENT_ID=master   # optional, defaults to master
```

## Run a migration

```bash
npm run migrate -- migrations/<file>.js
```

(The `--` is required so npm forwards the filename to `contentful-migration`.)

You'll be shown the plan and prompted to confirm. Type `y` to apply.

Example — running the SEO migration:

```bash
npm run migrate -- migrations/0001-create-seo-content-model.js
```

## After running

Regenerate types so they match the new schema:

```bash
npm run types:contentful
```

## Available migrations

- `0001-create-seo-content-model.js` — creates the `seo` content model
  (metaTitle, metaDescription, canonicalUrl, ogTitle, ogImage) and adds an
  `seo` reference field to the `page` content model.

## Field-ID contract

The following Contentful field IDs are referenced by name in
`src/utils/seo/buildMetadata.ts`. Renaming them in Contentful without
also updating the helper will silently break SEO rendering (no error,
just missing meta tags).

- `seo` content type fields: `metaTitle`, `metaDescription`,
  `canonicalUrl`, `ogTitle`, `ogImage`
- `page` content type: the `seo` reference field
