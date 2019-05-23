const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/Theme.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      }),
    ],
  },
};
