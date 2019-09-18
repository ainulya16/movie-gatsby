const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve('src/pages/index.js'),
  },
  {
    path: '/movie/*',
    matchPath: '/movie/:id',
    component: path.resolve('src/pages/index.js'),
  },
  {
    path: '/404',
    component: path.resolve('src/pages/index.js'),
  },
];
