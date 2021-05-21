# Trevas JS

JavaScript tools for the [Validation and Transformation Language](https://sdmx.org/?page_id=5096)

[![Build Status](https://travis-ci.org/InseeFr/Trevas-JS.svg?branch=master)](https://travis-ci.org/inseefr/trevas-js)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_Trevas-JS&metric=coverage)](https://sonarcloud.io/dashboard?id=InseeFr_Trevas-JS)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_Trevas-JS&metric=alert_status)](https://sonarcloud.io/dashboard?id=InseeFr_Trevas-JS)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The documentation can be found in the [docs](https://github.com/InseeFr/Trevas-JS/tree/master/docs) folder and [browsed online](https://inseefr.github.io/Trevas-JS).

[Storybook](https://inseefr.github.io/Trevas-JS/storybook) is also available online.

## Packages

VTL Tools is a monorepo.

### @inseefr/trevas

`interpret` function is exposed at root (named export)

### @inseefr/vtl-2.0-antlr-tools

`VtlLexer`, `VtlParser`, `VtlListener` and `VtlVisitor` are exposed at root (named export)

## Getting started

### Initilization

Clone Github repository:

```
git clone https://github.com/InseeFr/Trevas-JS.git
cd Trevas-JS
```

Install dependencies (yarn is required because of [workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)) and locally build packages:

```
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

### @inseefr/vtl-tools

This library is not yet maintained.
Last version is 0.1.15.

### @inseefr/vtl-2.1-engine

This library is not yet maintained.
Last version is 0.1.9.

### @inseefr/vtl-2.1-antlr-tools

This library is not yet maintained.
Last version is 1.0.0-rc2.
