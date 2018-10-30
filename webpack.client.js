const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyles = new ExtractTextPlugin({
    filename: 'bundle.css'
});

const browserConfig = {
  entry: './browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(scss|css)$/,
        use: extractStyles.extract({
          use: [{
            loader: 'css-loader',
            options: {
                url: false
            }
          }, {
            loader: 'sass-loader',
            options: {
                url: false
            }
          }],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    extractStyles
  ]
};

module.exports = browserConfig;
