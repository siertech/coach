"use strict";
(function(){

	angular.module("adm")

	.directive("diariosonhoGridView", diariosonhoGridView)
	.directive("diariosonhoTableView", diariosonhoTableView)
	.directive("diariosonhoList", diariosonhoList)
	.directive("diariosonhoDetalhe", diariosonhoList)
	.directive("diariosonhoForm", diariosonhoForm);
	
	function diariosonhoDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/diariosonho/html/diariosonhoDetalhe.html",
			controller: "diariosonhoDetalheCtrl",
			controllerAs:"$diariosonhoDetalheCtrl"

		};

	}
	
	function diariosonhoList(){

		return {

			restrict:"E",
			templateUrl:"app/diariosonho/html/diariosonhoList.html",
			controller: "diariosonhoListCtrl",
			controllerAs:"$diariosonhoListCtrl"

		};

	}

	function diariosonhoGridView(){

		return {

			restrict:"E",
			templateUrl:"app/diariosonho/html/diariosonhoGridView.html"

		};

	}

	function diariosonhoTableView(){

		return {

			restrict:"E",
			templateUrl:"app/diariosonho/html/diariosonhoTableView.html"
			
		};

	}

	function diariosonhoForm(){

		return {

			restrict:"E",
			templateUrl:"app/diariosonho/html/diariosonhoForm.html"
			
		};

	}

})();
