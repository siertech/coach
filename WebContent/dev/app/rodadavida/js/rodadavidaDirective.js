"use strict";
(function(){

	angular.module("stapi")

	.directive("rodadavidaGridView", rodadavidaGridView)
	.directive("rodadavidaTableView", rodadavidaTableView)
	.directive("rodadavidaList", rodadavidaList)
	.directive("rodadavidaDetalhe", rodadavidaList)
	.directive("rodadavidaForm", rodadavidaForm);
	
	function rodadavidaDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/rodadavida/html/rodadavidaDetalhe.html",
			controller: "rodadavidaDetalheCtrl",
			controllerAs:"$rodadavidaDetalheCtrl"

		};

	}
	
	function rodadavidaList(){

		return {

			restrict:"E",
			templateUrl:"app/rodadavida/html/rodadavidaList.html",
			controller: "rodadavidaListCtrl",
			controllerAs:"$rodadavidaListCtrl"

		};

	}

	function rodadavidaGridView(){

		return {

			restrict:"E",
			templateUrl:"app/rodadavida/html/rodadavidaGridView.html"

		};

	}

	function rodadavidaTableView(){

		return {

			restrict:"E",
			templateUrl:"app/rodadavida/html/rodadavidaTableView.html"
			
		};

	}

	function rodadavidaForm(){

		return {

			restrict:"E",
			templateUrl:"app/rodadavida/html/rodadavidaForm.html"
			
		};

	}

})();
