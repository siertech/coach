"use strict";
(function(){

	angular.module("adm")

	.directive("buscatransderivacionalGridView", buscatransderivacionalGridView)
	.directive("buscatransderivacionalTableView", buscatransderivacionalTableView)
	.directive("buscatransderivacionalList", buscatransderivacionalList)
	.directive("buscatransderivacionalDetalhe", buscatransderivacionalList)
	.directive("buscatransderivacionalForm", buscatransderivacionalForm);
	
	function buscatransderivacionalDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/buscatransderivacional/html/buscatransderivacionalDetalhe.html",
			controller: "buscatransderivacionalDetalheCtrl",
			controllerAs:"$buscatransderivacionalDetalheCtrl"

		};

	}
	
	function buscatransderivacionalList(){

		return {

			restrict:"E",
			templateUrl:"app/buscatransderivacional/html/buscatransderivacionalList.html",
			controller: "buscatransderivacionalListCtrl",
			controllerAs:"$buscatransderivacionalListCtrl"

		};

	}

	function buscatransderivacionalGridView(){

		return {

			restrict:"E",
			templateUrl:"app/buscatransderivacional/html/buscatransderivacionalGridView.html"

		};

	}

	function buscatransderivacionalTableView(){

		return {

			restrict:"E",
			templateUrl:"app/buscatransderivacional/html/buscatransderivacionalTableView.html"
			
		};

	}

	function buscatransderivacionalForm(){

		return {

			restrict:"E",
			templateUrl:"app/buscatransderivacional/html/buscatransderivacionalForm.html"
			
		};

	}

})();
