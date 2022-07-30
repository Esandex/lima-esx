const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const RemoveConsolePlugin = require('remove-console-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lima-esx.js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
   
  },
  plugins: [   
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyPlugin({
      patterns:[
        {
          from: path.resolve(__dirname, './src/index.d.ts'), 
        }
      ],
    }), 
    new RemoveConsolePlugin({ include: ['*'] })
  ],
};