# Trevas TS

Trevas TS is a TypeScript engine for the [Validation and Transformation Language](https://sdmx.org/?page_id=5096). It is part of the Trevas family, together with the [Trevas](https://github.com/InseeFr/Trevas) Java engine.

[![Trevas TS CI](https://github.com/InseeFr/Trevas-TS/actions/workflows/ci-main.yaml/badge.svg)](https://github.com/InseeFr/Trevas-TS/actions/workflows/ci-main.yaml)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_Trevas-TS&metric=coverage)](https://sonarcloud.io/dashboard?id=InseeFr_Trevas-TS)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=InseeFr_Trevas-TS&metric=alert_status)](https://sonarcloud.io/dashboard?id=InseeFr_Trevas-TS)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://inseefr.github.io/Trevas-TS/storybook/storybook-static)

The documentation can be found in the [docs](https://github.com/InseeFr/Trevas-TS/tree/master/docs) folder and [browsed online](https://inseefr.github.io/Trevas-TS/docs).

## @inseefr/trevas

[![npm version](https://badge.fury.io/js/%40inseefr%2Ftrevas.svg)](https://badge.fury.io/js/%40inseefr%2Ftrevas)

The `@inseefr/trevas` package is the VTL engine itself. It exposes the `interpret` named export.

### Versions

VTL 2.1 is supported since Trevas TS >= 1.0.0

VTL 2.0 was supported for Trevas TS < 1.0.0

## Getting started

### Use Trevas TS

```bash
pnpm add @inseefr/trevas
# or: npm install @inseefr/trevas
```

```ts
import { interpret } from "@inseefr/trevas";

const result = interpret("a + b", { a: 1, b: 2 });
```

Bindings may be scalars or datasets (`{ dataStructure, dataPoints }`). The published package only exposes the root entry (`@inseefr/trevas`); do not import deep paths from the package.

### Build Trevas TS

If you prefer to build Trevas TS locally, first clone the Github repository:

```
git clone https://github.com/InseeFr/Trevas-TS.git
cd Trevas-TS
pnpm i
pnpm build
```

### Tests

Run once:

```
pnpm test
```

Run with hot reloading:

```
pnpm test-watch
```

### Storybook - ⚠️ Temporarily not working

Run storybook:

```
pnpm storybook
```

### Documentation - ⚠️ Temporarily not working

Run docusaurus documentation:

```
cd docs
pnpm i
pnpm start
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

`@inseefr/trevas` is the next engine.

### @inseefr/vtl-2.1-antlr-tools

This library is deprecated and no longer maintained.
The last version is 1.0.0-rc2.

See [here](https://github.com/Making-Sense-Info/VTL-2.1-ANTLR-Tools-TS) for replacing tools.
