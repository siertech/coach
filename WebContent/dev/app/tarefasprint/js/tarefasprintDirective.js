"use strict";
(function(){

	angular.module("stapiApp")

	.directive("tarefasprintGridView", tarefasprintGridView)
	.directive("tarefasprintTableView", tarefasprintTableView)
	.directive("tarefasprintList", tarefasprintList)
	.directive("tarefasprintDetalhe", tarefasprintList)
	.directive("tarefasprintForm", tarefasprintForm);
	
	function tarefasprintDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/tarefasprint/html/tarefasprintDetalhe.html",
			controller: "tarefasprintDetalheCtrl",
			controllerAs:"$tarefasprintDetalheCtrl"

		};

	}
	
	function tarefasprintList(){

		return {

			restrict:"E",
			templateUrl:"app/tarefasprint/html/tarefasprintList.html",
			bindToController: true,
			controller: "tarefasprintListCtrl",
			controllerAs:"$tarefasprintListCtrl",
			scope:{
				fixProperties: "<",
				hideFilter: "<",
				hidePagination: "<",
				hideButtonAdd: "<"
			}

		};

	}

	function tarefasprintGridView(){

		return {

			restrict:"E",
			templateUrl:"app/tarefasprint/html/tarefasprintGridView.html"

		};

	}

	function tarefasprintTableView(){

		return {

			restrict:"E",
			templateUrl:"app/tarefasprint/html/tarefasprintTableView.html"
			
		};

	}

	function tarefasprintForm(){

		return {

			restrict:"E",
			templateUrl:"app/tarefasprint/html/tarefasprintForm.html"
			
		};

	}

})();
