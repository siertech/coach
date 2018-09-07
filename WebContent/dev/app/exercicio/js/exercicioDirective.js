"use strict";
(function(){

	angular.module("stapi")

	.directive("exercicioGridView", exercicioGridView)
	.directive("exercicioTableView", exercicioTableView)
	.directive("exercicioList", exercicioList)
	.directive("exercicioDetalhe", exercicioList)
	.directive("exercicioForm", exercicioForm);
	
	function exercicioDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/exercicio/html/exercicioDetalhe.html",
			controller: "exercicioDetalheCtrl",
			controllerAs:"$exercicioDetalheCtrl"

		};

	}
	
	function exercicioList(){

		return {

			restrict:"E",
			templateUrl:"app/exercicio/html/exercicioList.html",
			controller: "exercicioListCtrl",
			controllerAs:"$exercicioListCtrl"

		};

	}

	function exercicioGridView(){

		return {

			restrict:"E",
			templateUrl:"app/exercicio/html/exercicioGridView.html"

		};

	}

	function exercicioTableView(){

		return {

			restrict:"E",
			templateUrl:"app/exercicio/html/exercicioTableView.html"
			
		};

	}

	function exercicioForm(){

		return {

			restrict:"E",
			templateUrl:"app/exercicio/html/exercicioForm.html"
			
		};

	}

})();
