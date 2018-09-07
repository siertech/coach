"use strict";
(function(){

	angular.module("stapi")

	.directive("lembrancamarcanteGridView", lembrancamarcanteGridView)
	.directive("lembrancamarcanteTableView", lembrancamarcanteTableView)
	.directive("lembrancamarcanteList", lembrancamarcanteList)
	.directive("lembrancamarcanteDetalhe", lembrancamarcanteList)
	.directive("lembrancamarcanteForm", lembrancamarcanteForm);
	
	function lembrancamarcanteDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/lembrancamarcante/html/lembrancamarcanteDetalhe.html",
			controller: "lembrancamarcanteDetalheCtrl",
			controllerAs:"$lembrancamarcanteDetalheCtrl"

		};

	}
	
	function lembrancamarcanteList(){

		return {

			restrict:"E",
			templateUrl:"app/lembrancamarcante/html/lembrancamarcanteList.html",
			controller: "lembrancamarcanteListCtrl",
			controllerAs:"$lembrancamarcanteListCtrl"

		};

	}

	function lembrancamarcanteGridView(){

		return {

			restrict:"E",
			templateUrl:"app/lembrancamarcante/html/lembrancamarcanteGridView.html"

		};

	}

	function lembrancamarcanteTableView(){

		return {

			restrict:"E",
			templateUrl:"app/lembrancamarcante/html/lembrancamarcanteTableView.html"
			
		};

	}

	function lembrancamarcanteForm(){

		return {

			restrict:"E",
			templateUrl:"app/lembrancamarcante/html/lembrancamarcanteForm.html"
			
		};

	}

})();
