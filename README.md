# Ptah

A build tool created on top of Roolup. For TypeScript and React Typescript to .JS

## How to use

Install the package: `npm i ptah -D` or `yarn add ptah -D`

1. Add conguration in your package.json

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.module.js",
      "require": "./dist/index.js"
    },
    "./package.json": "./package.json"
  },
  "main": "dist/index.js",
  "module": "dist/index.module.js",
  "source": "src/index.ts",
  "types": "./dist/@types/index.d.ts",
  "files": [
    "dist",
    "types"
  ],
}

```

> NOTE: Change `"src/index.tsx"` for tsx.

1. Execute: `ptah` on terminal.

## Recomendations

Add two scripts on package.json:

```json
{
  "scripts": {
    "build": "ptah",
    "dev": "ptah-dev"
  }
}
```

## Watch Mode

Use `yarn dev` (aka. `ptah-dev`) to watch changes and build for every change.

## [The name](https://en.wikipedia.org/wiki/Ptah)

Ptah /ˈtɑː/[1] (Ancient Egyptian: ptḥ, reconstructed [piˈtaħ]; Ancient Greek: Φθά; Coptic: ⲡⲧⲁϩ)[2] is an ancient Egyptian deity, the god of craftsmen and architects.

...and it's also is **path**, misspelled 🙃