# Trevas

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
