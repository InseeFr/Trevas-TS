# VTL 2.0 Engine

## Usage

Download the library from npm:

```
yarn add @inseefr/vtl-2.0-engine
```

Import the `interpret` function:

```js
import { interpret } from '@inseefr/vtl-2.0-engine';
```

Execute VTL interpretation on an expression:

```js
const expr = '"Hello " || NAME';
const bindings = { NAME: 'world' };
const result = interpret(expr, bindings);
// result will be: 'Hello world'
```
