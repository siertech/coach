"use strict";
(function(){

	angular.module("stapi")

	.directive("anotacaoGridView", anotacaoGridView)
	.directive("anotacaoTableView", anotacaoTableView)
	.directive("anotacaoList", anotacaoList)
	.directive("anotacaoDetalhe", anotacaoList)
	.directive("anotacaoForm", anotacaoForm);
	
	function anotacaoDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/anotacao/html/anotacaoDetalhe.html",
			controller: "anotacaoDetalheCtrl",
			controllerAs:"$anotacaoDetalheCtrl"

		};

	}
	
	function anotacaoList(){

		return {

			restrict:"E",
			templateUrl:"app/anotacao/html/anotacaoList.html",
			controller: "anotacaoListCtrl",
			controllerAs:"$anotacaoListCtrl"

		};

	}

	function anotacaoGridView(){

		return {

			restrict:"E",
			templateUrl:"app/anotacao/html/anotacaoGridView.html"

		};

	}

	function anotacaoTableView(){

		return {

			restrict:"E",
			templateUrl:"app/anotacao/html/anotacaoTableView.html"
			
		};

	}

	function anotacaoForm(){

		return {

			restrict:"E",
			templateUrl:"app/anotacao/html/anotacaoForm.html"
			
		};

	}

})();
