"use strict";
(function(){

	angular.module("stapi")

	.directive("metricaGridView", metricaGridView)
	.directive("metricaTableView", metricaTableView)
	.directive("metricaList", metricaList)
	.directive("metricaDetalhe", metricaList)
	.directive("metricaForm", metricaForm);
	
	function metricaDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/metrica/html/metricaDetalhe.html",
			controller: "metricaDetalheCtrl",
			controllerAs:"$metricaDetalheCtrl"

		};

	}
	
	function metricaList(){

		return {

			restrict:"E",
			templateUrl:"app/metrica/html/metricaList.html",
			controller: "metricaListCtrl",
			controllerAs:"$metricaListCtrl"

		};

	}

	function metricaGridView(){

		return {

			restrict:"E",
			templateUrl:"app/metrica/html/metricaGridView.html"

		};

	}

	function metricaTableView(){

		return {

			restrict:"E",
			templateUrl:"app/metrica/html/metricaTableView.html"
			
		};

	}

	function metricaForm(){

		return {

			restrict:"E",
			templateUrl:"app/metrica/html/metricaForm.html"
			
		};

	}

})();
