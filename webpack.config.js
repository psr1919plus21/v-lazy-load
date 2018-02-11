var path = require('path');

module.exports = {
  entry: {
    index: './src/app/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build/static/js/'),
    filename: '[name].js'
  },
  watch: process.env.NODE_ENV === 'development' ? true : false,

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
             scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
