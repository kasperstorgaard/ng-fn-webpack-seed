var expect = chai.expect;

var controller = require('./view2.controller.js');

describe('app.view2 module', function() {

  beforeEach(function(){
    angular.module('app.view2', [])
      .controller('View2Controller', controller);

    angular.mock.module('app.view2');
  });

  describe('controller', function(){
    var controller, scope;

    beforeEach(inject(function($controller){
      scope = {};
      controller = $controller('View2Controller', { $scope: scope });
    }));

    describe('intial', function(){
      it('should exist', function() {
        expect(controller).to.not.be.undefined;
      });

      it('should modify the scope', function(){
        expect(scope.test).to.equal('view2-test');
      });
    });
  });
});
