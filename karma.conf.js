var path = require('path');
var webpack = require('webpack');

module.exports = function(config){
  var webpackConfig = require('./webpack.config.js');

  var karmaWebpack = {
    module: webpackConfig.module,
    resolve: webpackConfig.resolve,
    devtool: 'eval',
    cache: true
  };

  config.set({
    autoWatch : true,
    basePath: path.join(__dirname, '/app/'),
    browsers : ['Chrome'],
    colors: true,
    exclude: [],
    frameworks: ['mocha', 'chai'],
    files: [
      '../node_modules/angular/angular.min.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      '**/*.spec.js'
    ],
    logLevel: config.LOG_INFO,
    plugins : [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-chrome-launcher')
    ],
    port: 9876,
    preprocessors: {
      '**/*.spec.js': ['webpack']
    },
    reporters: ['progress'],
    webpack: karmaWebpack
  });
};
