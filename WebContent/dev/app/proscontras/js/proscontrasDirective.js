"use strict";
(function(){

	angular.module("adm")

	.directive("proscontrasGridView", proscontrasGridView)
	.directive("proscontrasTableView", proscontrasTableView)
	.directive("proscontrasList", proscontrasList)
	.directive("proscontrasDetalhe", proscontrasList)
	.directive("proscontrasForm", proscontrasForm);
	
	function proscontrasDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/proscontras/html/proscontrasDetalhe.html",
			controller: "proscontrasDetalheCtrl",
			controllerAs:"$proscontrasDetalheCtrl"

		};

	}
	
	function proscontrasList(){

		return {

			restrict:"E",
			templateUrl:"app/proscontras/html/proscontrasList.html",
			controller: "proscontrasListCtrl",
			controllerAs:"$proscontrasListCtrl"

		};

	}

	function proscontrasGridView(){

		return {

			restrict:"E",
			templateUrl:"app/proscontras/html/proscontrasGridView.html"

		};

	}

	function proscontrasTableView(){

		return {

			restrict:"E",
			templateUrl:"app/proscontras/html/proscontrasTableView.html"
			
		};

	}

	function proscontrasForm(){

		return {

			restrict:"E",
			templateUrl:"app/proscontras/html/proscontrasForm.html"
			
		};

	}

})();
