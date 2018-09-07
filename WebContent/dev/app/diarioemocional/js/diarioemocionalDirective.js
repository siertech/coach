"use strict";
(function(){

	angular.module("stapi")

	.directive("diarioemocionalGridView", diarioemocionalGridView)
	.directive("diarioemocionalTableView", diarioemocionalTableView)
	.directive("diarioemocionalList", diarioemocionalList)
	.directive("diarioemocionalDetalhe", diarioemocionalList)
	.directive("diarioemocionalForm", diarioemocionalForm);
	
	function diarioemocionalDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/diarioemocional/html/diarioemocionalDetalhe.html",
			controller: "diarioemocionalDetalheCtrl",
			controllerAs:"$diarioemocionalDetalheCtrl"

		};

	}
	
	function diarioemocionalList(){

		return {

			restrict:"E",
			templateUrl:"app/diarioemocional/html/diarioemocionalList.html",
			controller: "diarioemocionalListCtrl",
			controllerAs:"$diarioemocionalListCtrl"

		};

	}

	function diarioemocionalGridView(){

		return {

			restrict:"E",
			templateUrl:"app/diarioemocional/html/diarioemocionalGridView.html"

		};

	}

	function diarioemocionalTableView(){

		return {

			restrict:"E",
			templateUrl:"app/diarioemocional/html/diarioemocionalTableView.html"
			
		};

	}

	function diarioemocionalForm(){

		return {

			restrict:"E",
			templateUrl:"app/diarioemocional/html/diarioemocionalForm.html"
			
		};

	}

})();
