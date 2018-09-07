"use strict";
(function(){

	angular.module("stapi")

	.directive("trilhaGridView", trilhaGridView)
	.directive("trilhaTableView", trilhaTableView)
	.directive("trilhaList", trilhaList)
	.directive("trilhaDetalhe", trilhaList)
	.directive("trilhaForm", trilhaForm);
	
	function trilhaDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/trilha/html/trilhaDetalhe.html",
			controller: "trilhaDetalheCtrl",
			controllerAs:"$trilhaDetalheCtrl"

		};

	}
	
	function trilhaList(){

		return {

			restrict:"E",
			templateUrl:"app/trilha/html/trilhaList.html",
			controller: "trilhaListCtrl",
			controllerAs:"$trilhaListCtrl"

		};

	}

	function trilhaGridView(){

		return {

			restrict:"E",
			templateUrl:"app/trilha/html/trilhaGridView.html"

		};

	}

	function trilhaTableView(){

		return {

			restrict:"E",
			templateUrl:"app/trilha/html/trilhaTableView.html"
			
		};

	}

	function trilhaForm(){

		return {

			restrict:"E",
			templateUrl:"app/trilha/html/trilhaForm.html"
			
		};

	}

})();
