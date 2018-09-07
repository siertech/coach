"use strict";
(function(){

	angular.module("stapi")

	.directive("ritualitemGridView", ritualitemGridView)
	.directive("ritualitemTableView", ritualitemTableView)
	.directive("ritualitemList", ritualitemList)
	.directive("ritualitemDetalhe", ritualitemList)
	.directive("ritualitemForm", ritualitemForm);
	
	function ritualitemDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/ritualitem/html/ritualitemDetalhe.html",
			controller: "ritualitemDetalheCtrl",
			controllerAs:"$ritualitemDetalheCtrl"

		};

	}
	
	function ritualitemList(){

		return {

			restrict:"E",
			templateUrl:"app/ritualitem/html/ritualitemList.html",
			controller: "ritualitemListCtrl",
			controllerAs:"$ritualitemListCtrl"

		};

	}

	function ritualitemGridView(){

		return {

			restrict:"E",
			templateUrl:"app/ritualitem/html/ritualitemGridView.html"

		};

	}

	function ritualitemTableView(){

		return {

			restrict:"E",
			templateUrl:"app/ritualitem/html/ritualitemTableView.html"
			
		};

	}

	function ritualitemForm(){

		return {

			restrict:"E",
			templateUrl:"app/ritualitem/html/ritualitemForm.html"
			
		};

	}

})();
