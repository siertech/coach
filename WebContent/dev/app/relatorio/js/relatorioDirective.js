"use strict";
(function(){

	angular.module("stapi")

	.directive("relatorioGridView", relatorioGridView)
	.directive("relatorioTableView", relatorioTableView)
	.directive("relatorioList", relatorioList)
	.directive("relatorioDetalhe", relatorioList)
	.directive("relatorioForm", relatorioForm);
	
	function relatorioDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/relatorio/html/relatorioDetalhe.html",
			controller: "relatorioDetalheCtrl",
			controllerAs:"$relatorioDetalheCtrl"

		};

	}
	
	function relatorioList(){

		return {

			restrict:"E",
			templateUrl:"app/relatorio/html/relatorioList.html",
			controller: "relatorioListCtrl",
			controllerAs:"$relatorioListCtrl"

		};

	}

	function relatorioGridView(){

		return {

			restrict:"E",
			templateUrl:"app/relatorio/html/relatorioGridView.html"

		};

	}

	function relatorioTableView(){

		return {

			restrict:"E",
			templateUrl:"app/relatorio/html/relatorioTableView.html"
			
		};

	}

	function relatorioForm(){

		return {

			restrict:"E",
			templateUrl:"app/relatorio/html/relatorioForm.html"
			
		};

	}

})();
