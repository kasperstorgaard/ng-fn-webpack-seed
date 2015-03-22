module.exports = function($scope, $log, $timeout){
    $scope.test = 'view1-test';

    $scope.searchPhrase = {};

    var logValue = function logValue (value) {
		$log.log(value);
	}

	$scope.$watch('searchPhase', function(value){
		$scope.searchPhrase.stream.onValue(logValue);
	});
};
