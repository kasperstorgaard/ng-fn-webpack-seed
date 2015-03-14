var expect = chai.expect;

var controller = require('./view1.controller.js');

describe('myApp.view1 module', function() {

  beforeEach(function(){
    angular.module('myApp.view1', [])
      .controller('View1Controller', controller);

    angular.mock.module('myApp.view1');
  });

  describe('controller', function(){
    var controller, scope;

    beforeEach(inject(function($controller){
      scope = {};
      controller = $controller('View1Controller', { $scope: scope });
    }));

    describe('intial', function(){
      it('should exist', function() {
        expect(controller).to.not.be.undefined;
      });

      it('should modify the scope', function(){
        expect(scope.test).to.equal('view1-test');
      });
    });
  });
});
