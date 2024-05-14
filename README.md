# Deprecated

The docs are now in a monorepo with the rest of the codebase. 

Read the new readme here: 

https://github.com/chroma-core/chroma/tree/main/docs/docs.trychroma.com


***

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

### Generating Python Docs

1. Have chroma as a sibling to the the docs dir, eg 
```
/docs
/chroma
```

2. Update `pydoc-markdown.yml` if you need to expose more files other than Collection and Client

3. Run `yarn gen-python`

### Deployment

Vercel handles deploying main to https://docs.trychroma.com

### Generating Javascript Docs

1. Have chroma as a sibling to the the docs dir, eg 
```
/docs
/chroma
```

2. Update `scripts/jsDocs.sh`, `sidebar.json` if you need to expose more files other than Collection and Client

3. Run `yarn gen-js`

