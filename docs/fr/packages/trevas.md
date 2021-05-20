# Trevas

## Utilisation

Télécharger la libraire sur npm :

```
yarn add @inseefr/trevas
```

Importer la fonction `interpret` :

```js
import { interpret } from '@inseefr/trevas';
```

Exécuter l'interpretation VTL sur une expression :

```js
const expr = '"Hello " || NAME';
const bindings = { NAME: 'world' };
const result = interpret(expr, bindings);
// result will be: 'Hello world'
```
