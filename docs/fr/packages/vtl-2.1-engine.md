# VTL 2.1 Engine

## Utilisation

Télécharger la libraire sur npm:

```
yarn add @inseefr/vtl-2.1-engine
```

Importer la fonction `interpret` :

```
import { interpret } from '@inseefr/vtl-2.1-engine'
```

Exécuter l'interpretation VTL sur une expression:

```
const expr = '"Hello " || NAME';
const bindings = { NAME: 'world' };
const result = interpret(expr, bindings)
// result will be: 'Hello world'
```
