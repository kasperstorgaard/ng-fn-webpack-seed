//global styles
require('./less/layout/layout.less');

//dependencies
var angular = require('angular');

//initialize
var app = angular.module('app', [
  require('angular-route'),
  require('./modules/view1/index.js').name,
  require('./modules/view2/index.js').name
]);

require('./app.routes.js')(app);

module.exports = app;
