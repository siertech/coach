"use strict";
(function(){

	angular.module("stapi")

	.directive("frequenciasonoraGridView", frequenciasonoraGridView)
	.directive("frequenciasonoraTableView", frequenciasonoraTableView)
	.directive("frequenciasonoraList", frequenciasonoraList)
	.directive("frequenciasonoraDetalhe", frequenciasonoraList)
	.directive("frequenciasonoraForm", frequenciasonoraForm);
	
	function frequenciasonoraDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/frequenciasonora/html/frequenciasonoraDetalhe.html",
			controller: "frequenciasonoraDetalheCtrl",
			controllerAs:"$frequenciasonoraDetalheCtrl"

		};

	}
	
	function frequenciasonoraList(){

		return {

			restrict:"E",
			templateUrl:"app/frequenciasonora/html/frequenciasonoraList.html",
			controller: "frequenciasonoraListCtrl",
			controllerAs:"$frequenciasonoraListCtrl"

		};

	}

	function frequenciasonoraGridView(){

		return {

			restrict:"E",
			templateUrl:"app/frequenciasonora/html/frequenciasonoraGridView.html"

		};

	}

	function frequenciasonoraTableView(){

		return {

			restrict:"E",
			templateUrl:"app/frequenciasonora/html/frequenciasonoraTableView.html"
			
		};

	}

	function frequenciasonoraForm(){

		return {

			restrict:"E",
			templateUrl:"app/frequenciasonora/html/frequenciasonoraForm.html"
			
		};

	}

})();
