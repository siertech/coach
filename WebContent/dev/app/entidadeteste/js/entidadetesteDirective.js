"use strict";
(function(){

	angular.module("stapi")

	.directive("entidadetesteGridView", entidadetesteGridView)
	.directive("entidadetesteTableView", entidadetesteTableView)
	.directive("entidadetesteList", entidadetesteList)
	.directive("entidadetesteDetalhe", entidadetesteList)
	.directive("entidadetesteForm", entidadetesteForm);
	
	function entidadetesteDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/entidadeteste/html/entidadetesteDetalhe.html",
			controller: "entidadetesteDetalheCtrl",
			controllerAs:"$entidadetesteDetalheCtrl"

		};

	}
	
	function entidadetesteList(){

		return {

			restrict:"E",
			templateUrl:"app/entidadeteste/html/entidadetesteList.html",
			controller: "entidadetesteListCtrl",
			controllerAs:"$entidadetesteListCtrl"

		};

	}

	function entidadetesteGridView(){

		return {

			restrict:"E",
			templateUrl:"app/entidadeteste/html/entidadetesteGridView.html"

		};

	}

	function entidadetesteTableView(){

		return {

			restrict:"E",
			templateUrl:"app/entidadeteste/html/entidadetesteTableView.html"
			
		};

	}

	function entidadetesteForm(){

		return {

			restrict:"E",
			templateUrl:"app/entidadeteste/html/entidadetesteForm.html"
			
		};

	}

})();
