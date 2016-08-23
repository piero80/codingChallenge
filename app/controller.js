angular.module("myApp", ['myServices'])

	.controller("ItemsViewController", function($scope, dataFactory, $timeout) {
			$scope.getData = function(){
				dataFactory.getList().then(function(response){
				$scope.events = response.data.events;
				console.log('Fetched data!');
			});
		}
			$scope.intervalFunction = function(){
				$timeout(function(){
					$scope.getData();
				  $scope.intervalFunction();
				}, 30000);
			}
			$scope.refreshData = function(){
			  $scope.getData();
				console.log('refresh data')
			}
			$scope.getData();
			$scope.intervalFunction();

	});
