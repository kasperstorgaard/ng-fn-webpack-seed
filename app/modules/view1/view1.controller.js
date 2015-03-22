var R = require('ramda');

module.exports = function($scope, $log, $timeout){
    $scope.test = 'view1-test';

    $scope.searchPhrase = {};

    var logValue = function logValue(value) {
		$log.log(value);
	}

	var mount = R.once(function() {
		var arr = $scope.searchPhrase.stream
			.onValue(logValue);
	});

	$scope.$watch('searchPhase', mount);
};
