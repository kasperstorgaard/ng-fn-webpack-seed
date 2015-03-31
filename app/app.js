//global styles
require('./less/layout/layout.less');

//dependencies
var angular = require('angular');

//initialize
var app = angular
  .module('app', [
    require('angular-ui-router'),
    require('./pages/view1/index.js').name,
    require('./pages/view2/index.js').name
  ])
  .config(require('./app.routes.js'))

module.exports = app;
