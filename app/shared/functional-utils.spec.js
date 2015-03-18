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

  var obj;
  describe('safeGet', function(){
    beforeEach(function(){
      obj = [{test:'testval'}];
    });

    it('should return value when mapped and not null', function() {
      expect(P.map(F.safeGet('test'))(obj)).to.deep.equal(Maybe.Just(obj));
    });

    it('should return null when mapped and null', function() {
      expect(P.map(F.safeGet('nonexist'))(obj)).to.deep.equal(Maybe.Just(null));
    });
  });
});
