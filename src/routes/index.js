const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve('src/pages/index.js'),
  },
  {
    path: '/detail/*',
    matchPath: '/detail/:id',
    component: path.resolve('src/pages/index.js'),
  },
  {
    path: '/404',
    component: path.resolve('src/pages/index.js'),
  },
];
