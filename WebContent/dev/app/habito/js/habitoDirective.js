"use strict";
(function(){

	angular.module("stapi")

	.directive("habitoGridView", habitoGridView)
	.directive("habitoTableView", habitoTableView)
	.directive("habitoList", habitoList)
	.directive("habitoDetalhe", habitoList)
	.directive("habitoForm", habitoForm);
	
	function habitoDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/habito/html/habitoDetalhe.html",
			controller: "habitoDetalheCtrl",
			controllerAs:"$habitoDetalheCtrl"

		};

	}
	
	function habitoList(){

		return {

			restrict:"E",
			templateUrl:"app/habito/html/habitoList.html",
			controller: "habitoListCtrl",
			controllerAs:"$habitoListCtrl"

		};

	}

	function habitoGridView(){

		return {

			restrict:"E",
			templateUrl:"app/habito/html/habitoGridView.html"

		};

	}

	function habitoTableView(){

		return {

			restrict:"E",
			templateUrl:"app/habito/html/habitoTableView.html"
			
		};

	}

	function habitoForm(){

		return {

			restrict:"E",
			templateUrl:"app/habito/html/habitoForm.html"
			
		};

	}

})();
