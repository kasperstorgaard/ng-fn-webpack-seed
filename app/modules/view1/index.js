var angular = require('angular');

var app = angular.module('app.view1', [])
  .controller('View1Controller', require('./view1.controller.js'));

require('./view1.routes.js')(app);

module.exports = app;
