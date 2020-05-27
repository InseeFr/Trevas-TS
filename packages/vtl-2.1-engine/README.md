# VTL 2.1 Engine

## Usage

Download the library from npm:

```
yarn add @inseefr/vtl-2.1-engine
```

Import the `interpret` function:

```
import { interpret } from '@inseefr/vtl-2.1-engine'
```

Execute VTL interpretation on an expression:

```
const expr = '"Hello " || NAME';
const bindings = { NAME: 'world' };
const result = interpret(expr, bindings)
// result will be: 'Hello world'
```
