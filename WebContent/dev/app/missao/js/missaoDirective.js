"use strict";
(function(){

	angular.module("stapi")

	.directive("missaoGridView", missaoGridView)
	.directive("missaoTableView", missaoTableView)
	.directive("missaoList", missaoList)
	.directive("missaoDetalhe", missaoList)
	.directive("missaoForm", missaoForm);
	
	function missaoDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/missao/html/missaoDetalhe.html",
			controller: "missaoDetalheCtrl",
			controllerAs:"$missaoDetalheCtrl"

		};

	}
	
	function missaoList(){

		return {

			restrict:"E",
			templateUrl:"app/missao/html/missaoList.html",
			controller: "missaoListCtrl",
			controllerAs:"$missaoListCtrl"

		};

	}

	function missaoGridView(){

		return {

			restrict:"E",
			templateUrl:"app/missao/html/missaoGridView.html"

		};

	}

	function missaoTableView(){

		return {

			restrict:"E",
			templateUrl:"app/missao/html/missaoTableView.html"
			
		};

	}

	function missaoForm(){

		return {

			restrict:"E",
			templateUrl:"app/missao/html/missaoForm.html"
			
		};

	}

})();
