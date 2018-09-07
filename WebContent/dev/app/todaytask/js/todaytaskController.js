"use strict";
(function(){

	angular.module("stapi")
	.controller("todaytaskDetalheCtrl", todaytaskDetalheCtrl)
	.controller("todaytaskListCtrl", todaytaskListCtrl);

	var objectName = "TodayTask";

	function todaytaskDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function todaytaskListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
	

	}

})();
