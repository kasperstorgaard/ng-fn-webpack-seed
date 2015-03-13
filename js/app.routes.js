module.exports = function(app){
  app.config(function($routeProvider) {
    $routeProvider.
      otherwise({
        redirectTo: '/view1'
      });
  });
}
