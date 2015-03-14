var path = require('path');
var webpack = require('webpack');

module.exports = function(config){
  var webpackConfig = require('./webpack.config.js');

  var karmaWebpack = {
    module: webpackConfig.module,
    resolve: webpackConfig.resolve,
    plugins: [
      new webpack.ResolverPlugin([
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])], ["normal", "loader"]), new webpack.ContextReplacementPlugin(/.*$/, /a^/), new webpack.ProvidePlugin({
        // 'angular': 'exports?window.angular!bower/angular'
      }), new webpack.ProvidePlugin({
        "contentful": "contentful"
      })
    ],
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
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',
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
