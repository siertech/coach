"use strict";
(function(){

	angular.module("stapi")

	.directive("evidenciaGridView", evidenciaGridView)
	.directive("evidenciaTableView", evidenciaTableView)
	.directive("evidenciaList", evidenciaList)
	.directive("evidenciaDetalhe", evidenciaList)
	.directive("evidenciaForm", evidenciaForm);
	
	function evidenciaDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/evidencia/html/evidenciaDetalhe.html",
			controller: "evidenciaDetalheCtrl",
			controllerAs:"$evidenciaDetalheCtrl"

		};

	}
	
	function evidenciaList(){

		return {

			restrict:"E",
			templateUrl:"app/evidencia/html/evidenciaList.html",
			controller: "evidenciaListCtrl",
			controllerAs:"$evidenciaListCtrl"

		};

	}

	function evidenciaGridView(){

		return {

			restrict:"E",
			templateUrl:"app/evidencia/html/evidenciaGridView.html"

		};

	}

	function evidenciaTableView(){

		return {

			restrict:"E",
			templateUrl:"app/evidencia/html/evidenciaTableView.html"
			
		};

	}

	function evidenciaForm(){

		return {

			restrict:"E",
			templateUrl:"app/evidencia/html/evidenciaForm.html"
			
		};

	}

})();
