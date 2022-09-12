const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');   

module.exports = {
  entry: './src/js/ageCalc.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  devServer: {               
    contentBase: './dist'    
  },
  plugins: [
    new ESLintPlugin(), // new line!
    new CleanWebpackPlugin({
      verbose: true
    }), 
    new HtmlWebpackPlugin({
      title: 'Super Galactic Age Calculator',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}; 
