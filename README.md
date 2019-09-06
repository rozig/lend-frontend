# Lend Web Application
[![Build Status](https://travis-ci.com/rozig/reactjs-boilerplate.svg?branch=master)](https://travis-ci.com/rozig/reactjs-boilerplate) [![dependencies Status](https://david-dm.org/rozig/reactjs-boilerplate/status.svg)](https://david-dm.org/rozig/reactjs-boilerplate) [![devDependencies Status](https://david-dm.org/rozig/reactjs-boilerplate/dev-status.svg)](https://david-dm.org/rozig/reactjs-boilerplate?type=dev) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/rozig/reactjs-boilerplate.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/rozig/reactjs-boilerplate/context:javascript)

Boilerplate for React.js projects.

## Prerequisites
 - yarn
 - node js

## Folder Structure
```
├── public
│   ├── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── test
│   │   │   ├── Test.jsx
│   │   │   ├── Test.scss
│   │   │   ├── Test.test.jsx
│   ├── pages
│   ├── App.jsx
│   ├── App.scss
├── package.json
├── README.md
├── webpack.config.js
└── yarn.lock
```

## Install
1. Clone the repository
```git clone https://github.com/rozig/reactjs-boilerplate.git```

2. Install dependencies
```yarn install```

## Scripts
1. Run tests
```yarn test```

2. Start Development Server
```yarn start```

3. Build
Running `yarn build` script will create `dist` folder inside root folder which contains bundled javascript file, index.html and public files.

## License
This project is licensed under the MIT License.
