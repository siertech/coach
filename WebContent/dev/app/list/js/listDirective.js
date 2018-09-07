"use strict";
(function(){

	angular.module("adm")

	.directive("listGridView", listGridView)
	.directive("listTableView", listTableView)
	.directive("listList", listList)
	.directive("listDetalhe", listList)
	.directive("listForm", listForm);
	
	function listDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/list/html/listDetalhe.html",
			controller: "listDetalheCtrl",
			controllerAs:"$listDetalheCtrl"

		};

	}
	
	function listList(){

		return {

			restrict:"E",
			templateUrl:"app/list/html/listList.html",
			controller: "listListCtrl",
			controllerAs:"$listListCtrl"

		};

	}

	function listGridView(){

		return {

			restrict:"E",
			templateUrl:"app/list/html/listGridView.html"

		};

	}

	function listTableView(){

		return {

			restrict:"E",
			templateUrl:"app/list/html/listTableView.html"
			
		};

	}

	function listForm(){

		return {

			restrict:"E",
			templateUrl:"app/list/html/listForm.html"
			
		};

	}

})();
