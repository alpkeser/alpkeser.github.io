# Alp Keser

A Markdown publication built on [AstroPaper](https://github.com/satnaing/astro-paper) and hosted with GitHub Pages.

## Provenance

The project started from AstroPaper commit `35cfa7fbe0b897306d27670d3819e55d5205f3dd` (version 6.1.0 in its package metadata, using Astro 7.0.3). The template license is in [LICENSE](LICENSE). The previous Jekyll site remains in Git history at commit `8c47ce4`; a tracked-file snapshot was also saved locally as `/private/tmp/alpkeser-github-io-before-astro-2026-10-09.tar.gz`.

## Run locally

Use Node 24 and pnpm 10.34.6:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm build` and `pnpm preview` to inspect the production output. Search uses Pagefind, so it needs a production build before results appear.

## Publish a post

Create a Markdown file in `src/content/posts/`. The filename becomes the URL slug under `/posts/`. Use the installed content schema:

```yaml
---
title: "Post title"
description: "A short description of the post."
pubDatetime: 2026-10-09T10:00:00+02:00
tags: [notes]
draft: false
---
```

Set `draft: true` until ready. Keep photographs in `src/assets/images/` and reference them from Markdown so Astro can optimize them. Add accurate alt text and a caption where useful. Commit and push to `master` after previewing; the Pages workflow uses a frozen install, builds the search index, and publishes `dist/`.

## Typography

The intended production font is **Nitti** by Bold Monday: Regular for body text, Medium for headings, and Italic for emphasis. Licensed Nitti webfont files and permission to self-host them have not yet been supplied. The site therefore uses **iA Writer Mono** as a temporary preview font, with attribution in the footer. Its OFL license is included in `public/fonts/`. No Nitti files are in this repository.

When Nitti is available, replace the font files and declarations in `src/styles/fonts.css`, update the family and heading weights in `src/styles/theme.css` and `src/styles/typography.css`, and change the preload in `src/layouts/Layout.astro`. Confirm the actual font files load in browser network and computed-style tools before calling the switch complete. Check the licence before committing font files to a public repository.

The publication styling is intentionally limited to the three CSS files above and `src/styles/global.css`.

## Restore the former site

The former site's files are in commit `8c47ce4`. To review them without changing the current branch, use `git show 8c47ce4:<path>`. To restore the entire site, create a new branch from that commit and deploy it through the previous Pages configuration.
