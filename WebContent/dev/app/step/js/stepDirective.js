"use strict";
(function(){

	angular.module("adm")

	.directive("stepGridView", stepGridView)
	.directive("stepTableView", stepTableView)
	.directive("stepList", stepList)
	.directive("stepDetalhe", stepList)
	.directive("stepForm", stepForm);
	
	function stepDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/step/html/stepDetalhe.html",
			controller: "stepDetalheCtrl",
			controllerAs:"$stepDetalheCtrl"

		};

	}
	
	function stepList(){

		return {

			restrict:"E",
			templateUrl:"app/step/html/stepList.html",
			controller: "stepListCtrl",
			controllerAs:"$stepListCtrl"

		};

	}

	function stepGridView(){

		return {

			restrict:"E",
			templateUrl:"app/step/html/stepGridView.html"

		};

	}

	function stepTableView(){

		return {

			restrict:"E",
			templateUrl:"app/step/html/stepTableView.html"
			
		};

	}

	function stepForm(){

		return {

			restrict:"E",
			templateUrl:"app/step/html/stepForm.html"
			
		};

	}

})();
