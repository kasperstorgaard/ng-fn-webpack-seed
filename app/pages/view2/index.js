var angular = require('angular');

require('./view2.html');

var app = angular
  .module('app.view2', [
    require('angular-ui-router')
  ])
  .controller('View2Controller', function($scope){
    $scope.test = 'view2-test';
  })
  .config(function($stateProvider) {
    $stateProvider
      .state('view2', {
        url: '/view2',
        templateUrl: 'view2.html',
        controller: 'View2Controller'
      });
  });

module.exports = app;
