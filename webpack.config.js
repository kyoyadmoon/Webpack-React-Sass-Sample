var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080', //這個entry是自動更新用的
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/js/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'), //webpack 建置專案的路徑
    // publicPath: "/assets/", //webpack 使用 require() 時參考的路徑
    filename: 'bundle.js'
  },
  module: {
    loaders: [

      // JSX
      {
        test: [/\.(js|jsx)$/],
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app/js/') //include jsx src path for react-hot-loader
      },

      // CSS   這邊因為我下面使用了SASS，所以這邊CSS就不需要了，使用方法相同
      // {
      //   test: /\.css$/, // Only .css files
      //   loader: 'style!css', // Run both loaders
      //   include: path.join(__dirname, 'app/css/')
      // },

      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'app/sass/')
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),  //不使用 webpack-dev-server 的 inline-mode 時才需要加入
    new webpack.NoErrorsPlugin() //if any error exists ,the demo will not autorefresh
  ]
};

module.exports = config;
