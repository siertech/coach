"use strict";
(function(){

	angular.module("adm")

	.directive("sprintGridView", sprintGridView)
	.directive("sprintTableView", sprintTableView)
	.directive("sprintList", sprintList)
	.directive("sprintDetalhe", sprintList)
	.directive("sprintForm", sprintForm);
	
	function sprintDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/sprint/html/sprintDetalhe.html",
			controller: "sprintDetalheCtrl",
			controllerAs:"$sprintDetalheCtrl"

		};

	}
	
	function sprintList(){

		return {

			restrict:"E",
			templateUrl:"app/sprint/html/sprintList.html",
			bindToController: true,
			controller: "sprintListCtrl",
			controllerAs:"$sprintListCtrl",
			scope:{
				fixProperties: "<",
				hideFilter: "<",
				hidePagination: "<",
				hideButtonAdd: "<"
			}

		};

	}

	function sprintGridView(){

		return {

			restrict:"E",
			templateUrl:"app/sprint/html/sprintGridView.html"

		};

	}

	function sprintTableView(){

		return {

			restrict:"E",
			templateUrl:"app/sprint/html/sprintTableView.html"
			
		};

	}

	function sprintForm(){

		return {

			restrict:"E",
			templateUrl:"app/sprint/html/sprintForm.html"
			
		};

	}

})();
