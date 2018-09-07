"use strict";
(function(){

	angular.module("adm")

	.directive("metascumpridasGridView", metascumpridasGridView)
	.directive("metascumpridasTableView", metascumpridasTableView)
	.directive("metascumpridasList", metascumpridasList)
	.directive("metascumpridasDetalhe", metascumpridasList)
	.directive("metascumpridasForm", metascumpridasForm);
	
	function metascumpridasDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/metascumpridas/html/metascumpridasDetalhe.html",
			controller: "metascumpridasDetalheCtrl",
			controllerAs:"$metascumpridasDetalheCtrl"

		};

	}
	
	function metascumpridasList(){

		return {

			restrict:"E",
			templateUrl:"app/metascumpridas/html/metascumpridasList.html",
			controller: "metascumpridasListCtrl",
			controllerAs:"$metascumpridasListCtrl"

		};

	}

	function metascumpridasGridView(){

		return {

			restrict:"E",
			templateUrl:"app/metascumpridas/html/metascumpridasGridView.html"

		};

	}

	function metascumpridasTableView(){

		return {

			restrict:"E",
			templateUrl:"app/metascumpridas/html/metascumpridasTableView.html"
			
		};

	}

	function metascumpridasForm(){

		return {

			restrict:"E",
			templateUrl:"app/metascumpridas/html/metascumpridasForm.html"
			
		};

	}

})();
