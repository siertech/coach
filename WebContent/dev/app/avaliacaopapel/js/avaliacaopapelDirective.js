"use strict";
(function(){

	angular.module("stapi")

	.directive("avaliacaopapelGridView", avaliacaopapelGridView)
	.directive("avaliacaopapelTableView", avaliacaopapelTableView)
	.directive("avaliacaopapelList", avaliacaopapelList)
	.directive("avaliacaopapelDetalhe", avaliacaopapelList)
	.directive("avaliacaopapelForm", avaliacaopapelForm);
	
	function avaliacaopapelDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/avaliacaopapel/html/avaliacaopapelDetalhe.html",
			controller: "avaliacaopapelDetalheCtrl",
			controllerAs:"$avaliacaopapelDetalheCtrl"

		};

	}
	
	function avaliacaopapelList(){

		return {

			restrict:"E",
			templateUrl:"app/avaliacaopapel/html/avaliacaopapelList.html",
			controller: "avaliacaopapelListCtrl",
			controllerAs:"$avaliacaopapelListCtrl"

		};

	}

	function avaliacaopapelGridView(){

		return {

			restrict:"E",
			templateUrl:"app/avaliacaopapel/html/avaliacaopapelGridView.html"

		};

	}

	function avaliacaopapelTableView(){

		return {

			restrict:"E",
			templateUrl:"app/avaliacaopapel/html/avaliacaopapelTableView.html"
			
		};

	}

	function avaliacaopapelForm(){

		return {

			restrict:"E",
			templateUrl:"app/avaliacaopapel/html/avaliacaopapelForm.html"
			
		};

	}

})();
