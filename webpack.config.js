// npm i ts-loader webpack webpack-cli --save-dev    Instalação do webpack no node

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/basicTypes/aula18-webPack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'js'),
  },
  devtool: 'source-map',
};