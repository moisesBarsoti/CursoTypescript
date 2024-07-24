// npm i ts-loader webpack webpack-cli --save-dev    Instalação do webpack no node

const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/basicTypes/aula18-webPack/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
            configFile: 'tsconfig.frontend.json',
         },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
};