"use strict";
(function(){

	angular.module("adm")

	.directive("listitemGridView", listitemGridView)
	.directive("listitemTableView", listitemTableView)
	.directive("listitemList", listitemList)
	.directive("listitemDetalhe", listitemList)
	.directive("listitemForm", listitemForm);
	
	function listitemDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/listitem/html/listitemDetalhe.html",
			controller: "listitemDetalheCtrl",
			controllerAs:"$listitemDetalheCtrl"

		};

	}
	
	function listitemList(){

		return {

			restrict:"E",
			templateUrl:"app/listitem/html/listitemList.html",
			controller: "listitemListCtrl",
			controllerAs:"$listitemListCtrl"

		};

	}

	function listitemGridView(){

		return {

			restrict:"E",
			templateUrl:"app/listitem/html/listitemGridView.html"

		};

	}

	function listitemTableView(){

		return {

			restrict:"E",
			templateUrl:"app/listitem/html/listitemTableView.html"
			
		};

	}

	function listitemForm(){

		return {

			restrict:"E",
			templateUrl:"app/listitem/html/listitemForm.html"
			
		};

	}

})();
