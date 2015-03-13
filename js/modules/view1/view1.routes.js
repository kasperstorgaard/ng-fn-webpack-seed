module.exports = function(module){
  require('./view1.html');

  module.config(function($routeProvider) {
    $routeProvider.
      when('/view1', {
        templateUrl: 'view1.html',
        controller: 'View1Controller'
      })
  });
}
