// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage } = actions;
//   if (page.path === '/') {
//     page.matchPath = '/*';
//     createPage(page);
//   }
// };

// IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
// exports.onClientEntry = () => {
//   if (typeof window.IntersectionObserver === 'undefined') {
//     import('intersection-observer');
//     console.log('# IntersectionObserver is polyfilled!');
//   }
// };

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /bad-module/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
// }

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map"
  });
};