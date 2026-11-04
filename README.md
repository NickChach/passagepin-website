# PassagePin website

The PassagePin release website, built with Next.js, TypeScript, and custom CSS. Its fixed dark theme uses the desktop app’s colors, system typography, icon, and reading-pane styling.

## Development

```sh
bun install
bun run dev
```

Open [localhost:3000](http://localhost:3000).

## Production

```sh
bun run build
bun run start
```

## Content and design

- `app/page.tsx`: page content, FAQs, documentation links, and release links.
- `app/components/search-preview.tsx`: interactive illustration with authored example passages and illustrative rankings; no model runs in the browser.
- `app/components/ui-icon.tsx`: shared SVG interface icons.
- `app/globals.css`: theme tokens, layout, and responsive styles. No Tailwind or external fonts.
- `public/passagepin.svg`: the desktop app’s original brand mark.

Downloads link to the project’s GitHub Releases page rather than assuming a release tag or asset URL. Current Linux requirements and platform support follow the desktop app’s documentation. Review these when publishing a new release.
