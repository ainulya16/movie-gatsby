# AIA Direct ecomerce frontend

## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
  - [gatsby develop](#gatsby-develop)
  - [gatsby build](#gatsby-build)
  - [gatsby serve](#gatsby-serve)
- [Styling](#styling)
- [Testing](#testing)
- [To Do](#to-do)
- [Demo](#demo)
- [Known Issues](#known-issues)

## Features:

- [React](https://facebook.github.io/react/)
- [GatsbyJS](https://www.gatsbyjs.org/)
- [Ant Design](https://ant.design/)
- [Redux](http://redux.js.org/)
- [Redux Form](https://redux-form.com/)
- [Redux Saga](https://redux-saga.github.io/redux-saga/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Reselect](https://github.com/reactjs/reselect)
- [ImmutableJS](https://facebook.github.io/immutable-js/)
- [Styled Components](https://www.styled-components.com/)
- [Jest](https://jestjs.io/)
- [Selenium](https://www.seleniumhq.org/)

## Folder Structure

```
.
├── README.md
├── __mocks__ (jest mock functions)
├── .cache
├── public (builded static files)
├── selenium_test
├── src
|   ├── assets (static assets)
|   |   ├── fonts
|   |   └── images
|   ├── components (global reusable components for more than 1 sections)
|   │   └── Layout
|   |       ├── __tests__ (jest)
|   |       |   └── index.test.js
|   |       └── index.js
|   ├── pages
|   │   ├── dashboard
|   |   |   └── index.js
|   |   └── index.js
|   ├── redux
|   |   ├── app (example)
|   |   |   ├── actions.js
|   |   |   ├── reducers.js
|   |   |   ├── sagas.js
|   |   |   ├── constant.js
|   |   |   └── selectors.js
|   |   ├── home
|   |   |   ├── actions.js
|   |   |   ├── reducers.js
|   |   |   ├── sagas.js
|   |   |   ├── constant.js
|   |   |   └── selectors.js
|   |   ├── configure-store.js
|   |   ├── root-reducer.js
|   |   └── root-saga.js
|   └── utils
|       └── helper.js (function helpers)
|   └── layouts
|       └── home
|       |   ├── components (all section/layout related to home page)
|       |   |   ├── example1 (example1 component only used at home)
|       |   |   └── example2 (example2 component only used at home)
|       |   ├── __tests__ (test related to this folder)
|       |   └── index.js
|       └── index.js (export all layout to be available for use)
├── babelrc
├── eslintrc.json
├── gatsby-browser.js (gatsby client side customization)
├── gatsby-config.js (gatsby main config)
├── gatsby-node.js (gatsby nodejs customization)
├── gatsby-ssr.js (gatsby server side customization)
├── jest.preprocess.js (jest babel)
├── jest.config.js (jest root config)
├── jest.setup.js (jest setup)
├── loadershim.js (jest)
├── node_modules
│   └── [...]
└── package.json
```

## Some note on the structure

- Put all the reusable components that is used for more than 1 section/layout in src/components
- Naming component should be as general as possible and please take effort on choosing that name.
  Choose the name so that when people read the name, they can mostly know what it does.
- Decide whether current file (index.js or anything else) need to be tested or not (if all it does is only exporting, it doesn't need to be tested). If yes, make folder called **test** or **tests** adjacent to the file and write the test there.
- Put all related redux things (reducer, saga, action etc) in `redux` folder. Let's try to make it so that it has 1 reducer for 1 page.
- Layouts folder is where you combine all the base component you make into 1 component (which we call sections). If the component you make only used specifically for certain section, put that component inside those section folder. The hierarchy also continues for that component (meaning when that component has another component that made them, put it inside that component folder).

## Installation

Please make sure that `gatsby-cli` is installed before start. You can run `npm install -g gatsby-cli`. After install dependencies by running `npm install`, you can start by running `npm start` before open `localhost:8080` on your browser.

_remove your .npmrc that installed on machine (~/.npmrc) before install dependencies_

## Available Scripts

In the project directory, you can run:

### `gatsby develop`

Gatsby will start a hot-reloading development environment accessible by default at localhost:8000.

Try editing the JavaScript pages in src/pages. Saved changes will live reload in the browser.

### `gatsby build`

Gatsby will perform an optimized production build for your site, generating static HTML and per-route JavaScript code bundles.

### `gatsby serve`

Gatsby starts a local HTML server for testing your built site. Remember to build your site using gatsby build before using this command.

## Styling

For styling this project use styled-components.

## Testing

For testing this project use jest + enzyme for unit testing and selenium for e2e testing.
Run `npm test` for unit testing.
For Selenium test, just hit `npm run test:selenium`.

## To Do

- [x] Selenium test example
- [ ] Example screens for simulate redux saga usage

## Demo

https://aiadirectfrontend.z23.web.core.windows.net/

## Known Issues
