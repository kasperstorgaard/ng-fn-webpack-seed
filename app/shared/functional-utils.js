/*var P = require('pointfree-fantasy');
var Either = require('data.either');
var Future = require('data.future');*/
var R = require('ramda');
var Maybe = require('pointfree-fantasy/instances/maybe');

/*-- reference: --
  compose: P.compose,
  Maybe: P.Maybe,
  mjoin: P.mjoin,
  map: P.fmap,
  chain: P.flatMap,
  Future: data.future,
  Identity: P.Id,
  Either: Either,
  Left: Either.Left,
  Right: Either.Right,
  IO: P.IO.IO,
  runIO: P.IO.runIO

  P.IO.extendFn();
*/
var log = function(obj){
  console.log(obj);
  return obj;
};

var safeGet = R.curry(function(x,o){ return Maybe(o[x]) });

var pluck = R.curry(function(x, o) { return o[x]; });

var add = R.curry(function(x, y) { return x + y; });

module.exports = {
  add: add,
  log: log,
  pluck: pluck,
  safeGet: safeGet
};
