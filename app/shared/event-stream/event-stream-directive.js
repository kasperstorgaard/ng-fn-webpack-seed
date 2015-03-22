var Bacon = require('baconjs');

module.exports = function eventStreamDirective($log){
	return {
		restrict: 'A',
		scope: {
			'eventStream': '=',
			'eventType': '@'
		},
		link: function(scope, el, attr) {
			if(!scope.eventStream || !scope.eventType){ return; }

			scope.eventStream['stream'] = Bacon.fromEvent(el[0], scope.eventType);
		}
	}
}