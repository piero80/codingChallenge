angular.module('myServices', [])

	.factory('dataFactory', function($http) {

		var events = {};
		var urlBase = 'https://app-staging.sysdigcloud.com/api/events';

		events.getList = function(){
			return $http.get(urlBase, {
    		headers: {'Authorization': 'Bearer 8aef9517-3070-4090-b55e-83296cee8cd1'}
			});
		}

		return events;

	});
