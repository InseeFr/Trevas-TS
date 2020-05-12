# VTL Tools

JavaScript tools for the [Validation and Transformation Language](https://sdmx.org/?page_id=5096)

[![Build Status](https://travis-ci.org/InseeFr/VTL-Tools.svg?branch=master)](https://travis-ci.org/inseefr/vtl-tools)
[![Coverage Status](https://coveralls.io/repos/github/InseeFr/VTL-Tools/badge.svg?branch=master)](https://coveralls.io/github/InseeFr/VTL-Tools?branch=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_VTL-Tools&metric=alert_status)](https://sonarcloud.io/dashboard?id=InseeFr_VTL-Tools)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The documentation can be found in the [docs](https://github.com/InseeFr/VTL-Tools/tree/master/docs) folder and [browsed online](https://inseefr.github.io/VTL-Tools).

[Storybook](https://inseefr.github.io/VTL-Tools/storybook) is also available online.

## Packages

VTL Tools is a monorepo.
You can find below 4 packages giving 4 librairies.

### @inseefr/vtl-tools

This library is not yet maintained.
Last version is 0.1.15.
`Editor` component & `interpret` function are now exposed into to separate libs, see below.

### @inseefr/vtl-2.1-engine

`interpret` function is exposed at root (named export)

### @inseefr/editor

`Editor` component is exposed at root (named export)

### Antlr tools VTL grammars

#### @inseefr/vtl-2.1-antlr-tools

`VtlLexer`, `VtlParser`, `VtlListener` and `VtlVisitor` are exposed at root (named export)

#### @inseefr/vtl-2.0-antlr-tools

`VtlLexer`, `VtlParser`, `VtlListener` and `VtlVisitor` are exposed at root (named export)

## Getting started

### Initilization

Clone Github repository:

```
git clone https://github.com/InseeFr/VTL-Tools.git
cd VTL-Tools
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
