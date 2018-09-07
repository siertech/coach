"use strict";
(function(){

	angular.module("adm")

	.directive("stepitemGridView", stepitemGridView)
	.directive("stepitemTableView", stepitemTableView)
	.directive("stepitemList", stepitemList)
	.directive("stepitemDetalhe", stepitemList)
	.directive("stepitemForm", stepitemForm);
	
	function stepitemDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/stepitem/html/stepitemDetalhe.html",
			controller: "stepitemDetalheCtrl",
			controllerAs:"$stepitemDetalheCtrl"

		};

	}
	
	function stepitemList(){

		return {

			restrict:"E",
			templateUrl:"app/stepitem/html/stepitemList.html",
			controller: "stepitemListCtrl",
			controllerAs:"$stepitemListCtrl"

		};

	}

	function stepitemGridView(){

		return {

			restrict:"E",
			templateUrl:"app/stepitem/html/stepitemGridView.html"

		};

	}

	function stepitemTableView(){

		return {

			restrict:"E",
			templateUrl:"app/stepitem/html/stepitemTableView.html"
			
		};

	}

	function stepitemForm(){

		return {

			restrict:"E",
			templateUrl:"app/stepitem/html/stepitemForm.html"
			
		};

	}

})();
