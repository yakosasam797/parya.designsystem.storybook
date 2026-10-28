# Parya Storybook

An executable component explorer for the [Parya design-system library](https://github.com/yakosasam797/parya.designsystem.code). It consumes the shared React implementation and examples; no component code is duplicated here.

## Run locally

Clone both repositories beside each other using their original directory names:

```text
workspace/
  parya.designsystem.code/
  parya.designsystem.storybook/
```

In the code repository, run `npm ci` then `npm run build`. In this repository:

```sh
npm ci
npm run storybook
```

Open http://127.0.0.1:6008/. Requires Node.js 22.12+.

## Included

- 81 component documentation groups backed by the same library as the website.
- Real prop controls for 52 components, with controlled interactions reflected in Storybook args.
- Composed examples for components that require application behavior or children.
- Light/dark theme toolbar, viewport tools, accessibility panel, and source snippets.
- Generated story files and API table types sourced from the code repository's TypeScript metadata.
- Static build and browser smoke tests across every Default story.

```sh
npm run sync
npm run typecheck
npm run build
npm test
```

`npm run sync` regenerates `stories/` from `scripts/control-configs.mjs` and the code repository's generated metadata. Change the shared implementation and examples in the code repository; edit control defaults here. Do not edit generated story files by hand.

The initial dependency is a local `file:` link so the entire system is reviewable before choosing a package registry. For independently versioned releases, replace it with a pinned published library version and synchronize the metadata from that exact release. The CI workflow checks out both repositories to reproduce the current setup.

## Hosting

`npm run build` produces `storybook-static/`. It can be hosted publicly on a static host after hosting is chosen. Set the code repository's `VITE_STORYBOOK_URL` to that deployed URL. There is no deployment or package publication configured yet.

All components remain experimental. Accessibility tooling supports testing; it does not certify the system or its consumers.
