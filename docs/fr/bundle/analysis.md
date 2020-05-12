# Analyse des livrables

Etant donné que chaque package donne lieu à une libraire, un rapport est produit par package.

## Localement

Vous pouvez produire les rapports en vous plaçant à la racine du projet, avec la commande suivante :

```
yarn analyze
```

Vous pouvez également les produire individuellement :

```
yarn workspace @inseefr/{packageName} run analyze
```

Chaque rapport sera produit dans le dossier `bundle-report`du package.

## Deploiement

Les rapports sont publiés en ligne, accessibles depuis le menu de gauche.
