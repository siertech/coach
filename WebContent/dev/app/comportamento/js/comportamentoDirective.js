"use strict";
(function(){

	angular.module("adm")

	.directive("comportamentoGridView", comportamentoGridView)
	.directive("comportamentoTableView", comportamentoTableView)
	.directive("comportamentoList", comportamentoList)
	.directive("comportamentoDetalhe", comportamentoList)
	.directive("comportamentoForm", comportamentoForm);
	
	function comportamentoDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/comportamento/html/comportamentoDetalhe.html",
			controller: "comportamentoDetalheCtrl",
			controllerAs:"$comportamentoDetalheCtrl"

		};

	}
	
	function comportamentoList(){

		return {

			restrict:"E",
			templateUrl:"app/comportamento/html/comportamentoList.html",
			controller: "comportamentoListCtrl",
			controllerAs:"$comportamentoListCtrl"

		};

	}

	function comportamentoGridView(){

		return {

			restrict:"E",
			templateUrl:"app/comportamento/html/comportamentoGridView.html"

		};

	}

	function comportamentoTableView(){

		return {

			restrict:"E",
			templateUrl:"app/comportamento/html/comportamentoTableView.html"
			
		};

	}

	function comportamentoForm(){

		return {

			restrict:"E",
			templateUrl:"app/comportamento/html/comportamentoForm.html"
			
		};

	}

})();
