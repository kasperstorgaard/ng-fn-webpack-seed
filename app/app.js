//global styles
require('./less/layout/layout.less');

//dependencies
var angular = require('angular');

//initialize
var app = angular.module('app', [
  require('angular-route'),
  require('./shared').name,
  require('./modules/view1').name,
  require('./modules/view2').name
]);

require('./app.routes.js')(app);

module.exports = app;
