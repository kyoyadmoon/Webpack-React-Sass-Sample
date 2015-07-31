var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'), //webpack 建置專案的路徑
    // publicPath: "/assets/", //webpack 使用 require() 時參考的路徑
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'app') //include jsx src path for react-hot-loader
    }]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),  //不使用 webpack-dev-server 的 inline-mode 時才需要加入
    new webpack.NoErrorsPlugin()  //if any error exists ,the demo will not autorefresh
  ]
};

module.exports = config;
