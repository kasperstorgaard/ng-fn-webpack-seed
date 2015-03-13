module.exports = function(module){
  require('./view2.html');

  module.config(function($routeProvider) {
    $routeProvider.
      when('/view2', {
        templateUrl: 'view2.html',
        controller: 'View2Controller'
      })
  });
}
