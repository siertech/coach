"use strict";
(function(){

	angular.module("stapi")

	.directive("metaGridView", metaGridView)
	.directive("metaTableView", metaTableView)
	.directive("metaList", metaList)
	.directive("metaDetalhe", metaList)
	.directive("metaForm", metaForm)
	.directive("metaCountDown", function(dateUtil){
		return{
			
			template: '<timer max-time-unit="\'year\'"    end-time="endTimeFrom">{{years}} anos, {{months}} meses, {{days}} dias',
		    scope:{
		    
		    	fim: "@"
		    },
		    controller: function($scope){
		    	
		    	$scope.startTime = Number(new Date().getTime());
		    	$scope.endTimeFrom = Number(dateUtil.getDate($scope.fim).getTime());
		    	console.log("start");
		    	console.log($scope.startTime);
		    	console.log($scope.endTimeFrom);
		    }
		}
	})
	
	function metaDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/meta/html/metaDetalhe.html",
			controller: "metaDetalheCtrl",
			controllerAs:"$metaDetalheCtrl"

		};

	}
	
	function metaList(){

		return {

			restrict:"E",
			templateUrl:"app/meta/html/metaList.html",
			controller: "metaListCtrl",
			controllerAs:"$metaListCtrl",
			bindToController:true,
			scope:{
				fixProperties: "<",
				hideFilter: "<",
				hidePagination: "<",
				hideButtonAdd: "<"
			}

		};

	}

	function metaGridView(){

		return {

			restrict:"E",
			templateUrl:"app/meta/html/metaGridView.html"

		};

	}

	function metaTableView(){

		return {

			restrict:"E",
			templateUrl:"app/meta/html/metaTableView.html"
			
		};

	}

	function metaForm(){

		return {

			restrict:"E",
			templateUrl:"app/meta/html/metaForm.html"
			
		};

	}

})();
