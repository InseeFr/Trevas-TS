# Trevas TS

Trevas TS is a TypeScript engine for the [Validation and Transformation Language](https://sdmx.org/?page_id=5096). It is part of the Trevas family, together with the [Trevas](https://github.com/InseeFr/Trevas) Java engine.

[![Trevas TS CI](https://github.com/InseeFr/Trevas-TS/actions/workflows/ci.yml/badge.svg)](https://github.com/InseeFr/Trevas-TS/actions/workflows/ci.yml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_Trevas-TS&metric=coverage)](https://sonarcloud.io/dashboard?id=InseeFr_Trevas-TS)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_Trevas-TS&metric=alert_status)](https://sonarcloud.io/dashboard?id=InseeFr_Trevas-TS)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The documentation can be found in the [docs](https://github.com/InseeFr/Trevas-TS/tree/master/docs) folder and [browsed online](https://inseefr.github.io/Trevas-TS).

A [Storybook](https://inseefr.github.io/Trevas-TS/storybook) is also available online.

### @inseefr/trevas

[![npm version](https://badge.fury.io/js/%40inseefr%2Ftrevas.svg)](https://badge.fury.io/js/%40inseefr%2Ftrevas)

The `trevas` package is the VTL engine itself, which exposes the `interpret` function root (named export).

## Getting started

### Use Trevas TS

To use Trevas TS in your JavaScript project, just run:

```
yarn add @inseefr/trevas
```

or

```
npm install @inseefr/trevas
```

### Build Trevas TS

If you prefer to build Trevas TS locally, first clone the Github repository:

```
git clone https://github.com/InseeFr/Trevas-TS.git
cd Trevas-TS
yarn
yarn build
```

### Tests

Run once:

```
yarn test
```

Run with hot reloading:

```
yarn test-watch
```

### Storybook

Run storybook:

```
yarn start-storybook
```

## Archived packages

### @inseefr/vtl-2.0-antlr-tools

This library is deprecated and no longer maintained.
The last version is 0.3.2.

See [here](https://github.com/Making-Sense-Info/VTL-2.0-ANTLR-Tools-TS) for replacing tools.

### @inseefr/vtl-tools

This library is deprecated and no longer maintained.
The last version is 0.1.15.

### @inseefr/vtl-2.1-engine

This library is deprecated and no longer maintained.
The last version is 0.1.9.

### @inseefr/vtl-2.1-antlr-tools

This library is deprecated and no longer maintained.
The last version is 1.0.0-rc2.
