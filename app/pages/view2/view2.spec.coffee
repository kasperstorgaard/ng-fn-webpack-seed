expect = chai.expect;

describe 'myApp.view1 module', ->
  beforeEach ->
    angular.mock.module (require './index.js').name

  describe 'controller', ->
    controller = null
    scope = null

    beforeEach inject ($rootScope, $controller) ->
      scope = $rootScope.$new()
      controller = $controller('View2Controller', { $scope: scope })

    describe 'initial', ->
      it 'should exist', ->
        expect(controller).to.not.be.undefined

      it 'should modify the scope', ->
        expect(scope.test).to.equal 'view2-test'
