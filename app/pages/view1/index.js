var angular = require('angular');

require('./view1.html');

var app = angular
  .module('app.view1', [
    require('angular-ui-router')
  ])
  .controller('View1Controller', function($scope){
    $scope.test = 'view1-test';
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('view1', {
        url: '/view1',
        templateUrl: 'view1.html',
        controller: 'View1Controller'
      });
  });

module.exports = app;
