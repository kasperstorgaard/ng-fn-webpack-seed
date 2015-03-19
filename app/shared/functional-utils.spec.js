var expect = chai.expect;

var F = require('./functional-utils.js');
var P = require('pointfree-fantasy');
var Maybe = require('pointfree-fantasy/instances/maybe');
var Identity = require('pointfree-fantasy/instances/identity').Identity

describe('functional utils', function() {
  describe('log', function(){
    it('should return value', function() {
      expect(F.log('test')).to.equal('test');
    });
  });

  describe('add', function(){
    it('should work with numbers', function() {
      expect(F.add(2,3)).to.equal(5);
    });

    it('should work with strings', function() {
      expect(F.add('hello ', 'there')).to.equal('hello there');
    });
  });

  var user;
  describe('pluck', function(){
    beforeEach(function(){
      users = [{ firstName: 'tom'}, { firstName: 'alice'}, { firstName: 'ben'}];
    });

    it('should work with map', function() {
      var getFirstNames = P.map(F.pluck('firstName'));
      expect(getFirstNames(users)).to.deep.equal(['tom', 'alice', 'ben']);
    });
  });

  describe('safeGet', function(){
    it('should work with map', function() {
      var user = { firstName: 'tom'};
      var getFirstName = P.compose(P.map(F.add('my name is ')), F.safeGet('firstName'));
      expect(getFirstName(user)).to.deep.equal(Maybe.Just('my name is tom'));
    });

    it('should work when no attr is present', function() {
      var user = {};
      var getFirstName = P.compose(P.map(F.add('my name is ')), F.safeGet('firstName'));
      expect(getFirstName(user)).to.deep.equal(Maybe.Nothing());
    });
  });
});
