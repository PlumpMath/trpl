var app = angular.module('march', []);

app.controller("mainCtrl", ['$scope', function($scope) {

	$scope.checkpass = function () {
		if ($scope.synthima == 'nelly') {
			$scope.test = true;
		} else {
			$scope.test = false;
		}
	}

	$scope.test = false;
	$scope.test2 = false;
	$scope.free = 20;
	$scope.participants = 51;
	$scope.ticketsCost = 14075;
	$scope.others = 1450;
	$scope.arxigoi = 4;
	$scope.cost = 425;
	$scope.adults = 3;
	$scope.adultsPay = 750;
	$scope.numberOfSuitcases = 36;
	$scope.costOfSuitcase = 45;



	$scope.update = function () {
		$scope.fees = ($scope.participants - $scope.free)*$scope.cost
		$scope.suitcases = $scope.numberOfSuitcases*$scope.costOfSuitcase
		$scope.total = (($scope.numberOfSuitcases*$scope.costOfSuitcase)+$scope.others+$scope.ticketsCost+(($scope.participants-$scope.free)*425))
		$scope.perPart = Math.round($scope.total/($scope.participants-$scope.arxigoi))
	};

	$scope.update();

	$scope.updateNew = function () {
		$scope.totalNew =  $scope.total
		$scope.ypoloipoi = $scope.participants - $scope.arxigoi

		for (i=0; i<$scope.indivs.length; i++) {
			$scope.totalNew -= $scope.indivs[i].people*$scope.indivs[i].amount
			$scope.ypoloipoi -= $scope.indivs[i].people
		}

		$scope.perPartNew = Math.round($scope.totalNew/$scope.ypoloipoi)
	};

	$scope.indivs = [
		{
			people: 6,
			amount: 750
		},
		{
			people: 1,
			amount: 600
		},
		{
			people: 1,
			amount: 350
		},
		{
			people: 2,
			amount: 220
		}
	]

	$scope.addNew = function () {
		$scope.indivs.push({people:0, amount:0})
		if ($scope.indivs.length == 1) {
			$scope.test2  = false;
		}
		$scope.updateNew()
	}

	$scope.edit = function (trackNo, what) {
		var editable = prompt("Enter new number for " + what + ":")
		$scope.indivs[trackNo][what] = editable
		$scope.updateNew()
	}

	$scope.removeLine = function (index) {
		$scope.indivs.splice(index, 1)
		if ($scope.indivs.length == 0) {
			$scope.test2 = true
		}
		$scope.updateNew()
	}

	$scope.updateNew();

}])