# Chroma docs

These docs are built using [Docusaurus 2](https://docusaurus.io/)

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Vercel handles deploying main to https://docs.trychroma.com

### Generating Javascript Docs

1. Have chroma as a sibling to the the docs dir, eg 
```
/docs
/chroma
```

2. Update `scripts/generateJSDocs.sh`, `sidebar.json` if you need to expose more files other than Collection and Client

3. Run `yarn rebuild-js-docs`

4. Update the frontmatter for the generated docs to set the page titles and their positions (manual for now)

```
---
sidebar_label: Client
title: Client
sidebar_position: 1
---
```
```
---
sidebar_label: Collection
title: Collection
sidebar_position: 2
---
```