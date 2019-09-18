const path = require('path');

module.exports = [
  {
    path: '/',
    component: path.resolve('src/pages/Home/index.js'),
  },
  {
    path: '/movie/*',
    matchPath: '/movie/:id',
    component: path.resolve('src/pages/Movie/index.js'),
  },
  {
    path: '/404',
    component: path.resolve('src/pages/404/index.js'),
  },
];
