"use strict";
(function(){

	angular.module("stapi")

	.directive("fobiaGridView", fobiaGridView)
	.directive("fobiaTableView", fobiaTableView)
	.directive("fobiaList", fobiaList)
	.directive("fobiaDetalhe", fobiaList)
	.directive("fobiaForm", fobiaForm);
	
	function fobiaDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/fobia/html/fobiaDetalhe.html",
			controller: "fobiaDetalheCtrl",
			controllerAs:"$fobiaDetalheCtrl"

		};

	}
	
	function fobiaList(){

		return {

			restrict:"E",
			templateUrl:"app/fobia/html/fobiaList.html",
			controller: "fobiaListCtrl",
			controllerAs:"$fobiaListCtrl"

		};

	}

	function fobiaGridView(){

		return {

			restrict:"E",
			templateUrl:"app/fobia/html/fobiaGridView.html"

		};

	}

	function fobiaTableView(){

		return {

			restrict:"E",
			templateUrl:"app/fobia/html/fobiaTableView.html"
			
		};

	}

	function fobiaForm(){

		return {

			restrict:"E",
			templateUrl:"app/fobia/html/fobiaForm.html"
			
		};

	}

})();
