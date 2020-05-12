# Bundle analysis

As each package giving a library, we provide bundle report for each package.

## Locally

You can produce reports executing the following command at the root of the project:

```
yarn analyze
```

You can also produce individual report from root with:

```
yarn workspace @inseefr/{packageName} run analyze
```

Each report will be built in the `bundle-report` folder of each package.

## Deployed

Reports are published online, see the dedicated entry in the left menu.
