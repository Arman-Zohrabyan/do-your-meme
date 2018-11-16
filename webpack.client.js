const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;


const browserConfig = {
  entry: './browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[chunkhash].js',
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
        use: ExtractTextPlugin.extract({
          use: [
              { loader: 'css-loader', options: {} },
              { loader: 'sass-loader', options: {} },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loader) => [
                    require('autoprefixer')({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',  
                      ],
                      flexbox: 'no-2009',
                    })
                  ]
                }
              },
            ],
            fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: '[name].js',
      minChunks: Infinity
    }),
    new ReactLoadablePlugin({
      filename: './public/react-loadable.json',
    }),
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    }),
    new ExtractTextPlugin('bundle.css')
  ]
};

module.exports = browserConfig;
