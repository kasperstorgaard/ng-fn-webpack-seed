var angular = require('angular');

var app = angular.module('app.view2', [])
  .controller('View2Controller', require('./view2.controller.js'));

require('./view2.routes.js')(app);

module.exports = app;
