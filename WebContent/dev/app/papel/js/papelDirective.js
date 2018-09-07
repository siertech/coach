"use strict";
(function(){

	angular.module("stapi")

	.directive("papelGridView", papelGridView)
	.directive("papelTableView", papelTableView)
	.directive("papelList", papelList)
	.directive("papelDetalhe", papelList)
	.directive("papelForm", papelForm);
	
	function papelDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/papel/html/papelDetalhe.html",
			controller: "papelDetalheCtrl",
			controllerAs:"$papelDetalheCtrl"

		};

	}
	
	function papelList(){

		return {

			restrict:"E",
			templateUrl:"app/papel/html/papelList.html",
			controller: "papelListCtrl",
			controllerAs:"$papelListCtrl"

		};

	}

	function papelGridView(){

		return {

			restrict:"E",
			templateUrl:"app/papel/html/papelGridView.html"

		};

	}

	function papelTableView(){

		return {

			restrict:"E",
			templateUrl:"app/papel/html/papelTableView.html"
			
		};

	}

	function papelForm(){

		return {

			restrict:"E",
			templateUrl:"app/papel/html/papelForm.html"
			
		};

	}

})();
