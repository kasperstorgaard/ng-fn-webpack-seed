//global styles
require('../less/layout/layout.less');

//initialize
var app = angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  require('./modules/view1').name,
  require('./modules/view2').name
]);

require('./app.routes.js')(app);

module.exports = app;
