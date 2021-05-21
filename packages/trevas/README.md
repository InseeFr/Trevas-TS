# Trevas

[![npm version](https://badge.fury.io/js/%40inseefr%2Ftrevas.svg)](https://badge.fury.io/js/%40inseefr%2Ftrevas)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Transformation engine and validator for statistics.

## Usage

Download the library from npm:

```
yarn add @inseefr/trevas
```

Import the `interpret` function:

```js
import { interpret } from '@inseefr/trevas';
```

Execute VTL interpretation on an expression:

```js
const expr = '"Hello " || NAME';
const bindings = { NAME: 'world' };
const result = interpret(expr, bindings);
// result will be: 'Hello world'
```
