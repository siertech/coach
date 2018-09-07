"use strict";
(function(){

	angular.module("stapi")

	.directive("burndownGridView", burndownGridView)
	.directive("burndownTableView", burndownTableView)
	.directive("burndownList", burndownList)
	.directive("burndownDetalhe", burndownList)
	.directive("burndownForm", burndownForm);
	
	function burndownDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/burndown/html/burndownDetalhe.html",
			controller: "burndownDetalheCtrl",
			controllerAs:"$burndownDetalheCtrl"

		};

	}
	
	function burndownList(){

		return {

			restrict:"E",
			templateUrl:"app/burndown/html/burndownList.html",
			controller: "burndownListCtrl",
			controllerAs:"$burndownListCtrl"

		};

	}

	function burndownGridView(){

		return {

			restrict:"E",
			templateUrl:"app/burndown/html/burndownGridView.html"

		};

	}

	function burndownTableView(){

		return {

			restrict:"E",
			templateUrl:"app/burndown/html/burndownTableView.html"
			
		};

	}

	function burndownForm(){

		return {

			restrict:"E",
			templateUrl:"app/burndown/html/burndownForm.html"
			
		};

	}

})();
