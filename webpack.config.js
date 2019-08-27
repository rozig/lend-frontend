const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
  inject: 'body'
});

const copyPlugin = new CopyWebpackPlugin([{
  from: 'public/',
  to: path.resolve(__dirname, 'dist')
}], {
  ignore: ['index.html']
});

const cleanPlugin = new CleanWebpackPlugin([
  'dist'
], {
  root: __dirname,
  exclude: [],
  verbose: true,
  dry: false
});

module.exports = {
  entry: path.join(__dirname, 'src', 'App.jsx'),
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [htmlPlugin, copyPlugin, cleanPlugin],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx']
  }
};
