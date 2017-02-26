var app = angular.module('march', []);

app.controller("mainCtrl", ['$scope', function($scope) {

	$scope.checkpass = function () {
		if ($scope.synthima == 'nelly') {
			$scope.test = true;
		} else {
			$scope.test = false;
		}
	}

	$scope.free = 20;
	$scope.participants = 51;
	$scope.ticketsCost = 14075;
	$scope.others = 1400;
	$scope.arxigoi = 4;
	$scope.cost = 425;
	$scope.adults = 3;
	$scope.adultsPay = 750;
	$scope.numberOfSuitcases = 36;
	$scope.costOfSuitcase = 45;

	$scope.update = function () {
		$scope.perPart = Math.round(($scope.others+$scope.ticketsCost+(($scope.participants-$scope.free)*425))/($scope.participants-$scope.arxigoi))
	};

	$scope.update();

	$scope.updateNew = function () {
		$scope.perPartNew = Math.round(($scope.others+$scope.ticketsCost-($scope.adults*$scope.adultsPay)+(($scope.participants-$scope.free)*425))/($scope.participants-$scope.arxigoi-$scope.adults))
	};

	$scope.updateNew();

}])