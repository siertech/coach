"use strict";
(function(){

	angular.module("stapi")

	.directive("habitosubmitGridView", habitosubmitGridView)
	.directive("habitosubmitTableView", habitosubmitTableView)
	.directive("habitosubmitList", habitosubmitList)
	.directive("habitosubmitDetalhe", habitosubmitList)
	.directive("habitosubmitForm", habitosubmitForm);
	
	function habitosubmitDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/habitosubmit/html/habitosubmitDetalhe.html",
			controller: "habitosubmitDetalheCtrl",
			controllerAs:"$habitosubmitDetalheCtrl"

		};

	}
	
	function habitosubmitList(){

		return {

			restrict:"E",
			templateUrl:"app/habitosubmit/html/habitosubmitList.html",
			controller: "habitosubmitListCtrl",
			controllerAs:"$habitosubmitListCtrl"

		};

	}

	function habitosubmitGridView(){

		return {

			restrict:"E",
			templateUrl:"app/habitosubmit/html/habitosubmitGridView.html"

		};

	}

	function habitosubmitTableView(){

		return {

			restrict:"E",
			templateUrl:"app/habitosubmit/html/habitosubmitTableView.html"
			
		};

	}

	function habitosubmitForm(){

		return {

			restrict:"E",
			templateUrl:"app/habitosubmit/html/habitosubmitForm.html"
			
		};

	}

})();
