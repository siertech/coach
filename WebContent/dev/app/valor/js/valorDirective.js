"use strict";
(function(){

	angular.module("stapi")

	.directive("valorGridView", valorGridView)
	.directive("valorTableView", valorTableView)
	.directive("valorList", valorList)
	.directive("valorDetalhe", valorList)
	.directive("valorForm", valorForm);
	
	function valorDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/valor/html/valorDetalhe.html",
			controller: "valorDetalheCtrl",
			controllerAs:"$valorDetalheCtrl"

		};

	}
	
	function valorList(){

		return {

			restrict:"E",
			templateUrl:"app/valor/html/valorList.html",
			controller: "valorListCtrl",
			controllerAs:"$valorListCtrl"

		};

	}

	function valorGridView(){

		return {

			restrict:"E",
			templateUrl:"app/valor/html/valorGridView.html"

		};

	}

	function valorTableView(){

		return {

			restrict:"E",
			templateUrl:"app/valor/html/valorTableView.html"
			
		};

	}

	function valorForm(){

		return {

			restrict:"E",
			templateUrl:"app/valor/html/valorForm.html"
			
		};

	}

})();
