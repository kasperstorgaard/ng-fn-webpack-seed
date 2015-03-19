var expect = chai.expect;

var F = require('./functional-utils.js');
var P = require('pointfree-fantasy');
var Maybe = require('pointfree-fantasy/instances/maybe');

describe('functional utils', function() {
  describe('log', function(){
    it('should return value', function() {
      expect(F.log('test')).to.equal('test');
    });
  });

  var user;
  describe('safeGet', function(){
    beforeEach(function(){
      user = { firstName: 'tom'};
    });

    it('should work with map', function() {
      var getFirstName = P.compose(P.map(F.add('my name is ')), F.safeGet('firstName'));
      expect(getFirstName(user)).to.deep.equal(Maybe.Just('my name is tom'));
    });
  });
});
