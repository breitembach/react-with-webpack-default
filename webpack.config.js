const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "index.html"
});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
      // {
      //     test: /\.scss$/,
      //     loader: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']
      // },
    ]
  },
  plugins: [
    htmlPlugin
  ]
};