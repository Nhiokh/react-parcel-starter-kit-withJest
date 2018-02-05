# React starter kit using [Parcel](parceljs.org) as bundler, [Flow](https://flow.org/) for type coverage and [Jest](https://facebook.github.io/jest/) for unit testing
This starter kit is kind of a copy of create-react-app, but without the webpack composant. It aims to emulate what create-react-app does right out of the box, but permits you to use your own Service Workers without ejecting the project.

It uses Flow to typecheck your project, which plays nicely with [Nuclide IDE](https://nuclide.io/) (on [Atom](https://atom.io/)).

It also uses Jest (boosted with [Enzyme](http://airbnb.io/enzyme/)) to unit-test components.

## How to use
First, clone this repo

```
git clone https://github.com/Nhiokh/react-parcel-starter-kit my-project
cd my-project
```

Then, install the dependencies

```
npm install or yarn install
```

You're good to go. Just use one of the following scripts

## Three scripts
Depending on what you're using :

### Starting development environment

```
npm start or yarn start
```

This starts a dev server which on port 1234 (access via localhost:1234).
Hot reloading is available right out of the box.

### Starting development environment

```
npm test or yarn test
```

This starts the tests you created for your App on your _tests_ folder.

### Starting building your app for production

```
npm build or yarn build   
```
