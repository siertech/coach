"use strict";
(function(){

	angular.module("stapi")

	.directive("todaytaskGridView", todaytaskGridView)
	.directive("todaytaskTableView", todaytaskTableView)
	.directive("todaytaskList", todaytaskList)
	.directive("todaytaskDetalhe", todaytaskList)
	.directive("todaytaskForm", todaytaskForm);
	
	function todaytaskDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/todaytask/html/todaytaskDetalhe.html",
			controller: "todaytaskDetalheCtrl",
			controllerAs:"$todaytaskDetalheCtrl"

		};

	}
	
	function todaytaskList(){

		return {

			restrict:"E",
			templateUrl:"app/todaytask/html/todaytaskList.html",
			controller: "todaytaskListCtrl",
			controllerAs:"$todaytaskListCtrl"

		};

	}

	function todaytaskGridView(){

		return {

			restrict:"E",
			templateUrl:"app/todaytask/html/todaytaskGridView.html"

		};

	}

	function todaytaskTableView(){

		return {

			restrict:"E",
			templateUrl:"app/todaytask/html/todaytaskTableView.html"
			
		};

	}

	function todaytaskForm(){

		return {

			restrict:"E",
			templateUrl:"app/todaytask/html/todaytaskForm.html"
			
		};

	}

})();
