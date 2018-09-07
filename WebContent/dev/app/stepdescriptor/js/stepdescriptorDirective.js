"use strict";
(function(){

	angular.module("adm")

	.directive("stepdescriptorGridView", stepdescriptorGridView)
	.directive("stepdescriptorTableView", stepdescriptorTableView)
	.directive("stepdescriptorList", stepdescriptorList)
	.directive("stepdescriptorDetalhe", stepdescriptorList)
	.directive("stepdescriptorForm", stepdescriptorForm);
	
	function stepdescriptorDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/stepdescriptor/html/stepdescriptorDetalhe.html",
			controller: "stepdescriptorDetalheCtrl",
			controllerAs:"$stepdescriptorDetalheCtrl"

		};

	}
	
	function stepdescriptorList(){

		return {

			restrict:"E",
			templateUrl:"app/stepdescriptor/html/stepdescriptorList.html",
			controller: "stepdescriptorListCtrl",
			controllerAs:"$stepdescriptorListCtrl"

		};

	}

	function stepdescriptorGridView(){

		return {

			restrict:"E",
			templateUrl:"app/stepdescriptor/html/stepdescriptorGridView.html"

		};

	}

	function stepdescriptorTableView(){

		return {

			restrict:"E",
			templateUrl:"app/stepdescriptor/html/stepdescriptorTableView.html"
			
		};

	}

	function stepdescriptorForm(){

		return {

			restrict:"E",
			templateUrl:"app/stepdescriptor/html/stepdescriptorForm.html"
			
		};

	}

})();
