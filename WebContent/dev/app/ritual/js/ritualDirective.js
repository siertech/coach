"use strict";
(function(){

	angular.module("stapi")

	.directive("ritualGridView", ritualGridView)
	.directive("ritualTableView", ritualTableView)
	.directive("ritualList", ritualList)
	.directive("ritualDetalhe", ritualList)
	.directive("ritualForm", ritualForm);
	
	function ritualDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/ritual/html/ritualDetalhe.html",
			controller: "ritualDetalheCtrl",
			controllerAs:"$ritualDetalheCtrl"

		};

	}
	
	function ritualList(){

		return {

			restrict:"E",
			templateUrl:"app/ritual/html/ritualList.html",
			controller: "ritualListCtrl",
			controllerAs:"$ritualListCtrl"

		};

	}

	function ritualGridView(){

		return {

			restrict:"E",
			templateUrl:"app/ritual/html/ritualGridView.html"

		};

	}

	function ritualTableView(){

		return {

			restrict:"E",
			templateUrl:"app/ritual/html/ritualTableView.html"
			
		};

	}

	function ritualForm(){

		return {

			restrict:"E",
			templateUrl:"app/ritual/html/ritualForm.html"
			
		};

	}

})();
