"use strict";
(function(){

	angular.module("stapi")

	.directive("metricasubmitGridView", metricasubmitGridView)
	.directive("metricasubmitTableView", metricasubmitTableView)
	.directive("metricasubmitList", metricasubmitList)
	.directive("metricasubmitDetalhe", metricasubmitList)
	.directive("metricasubmitForm", metricasubmitForm);
	
	function metricasubmitDetalhe(){

		return {

			restrict:"E",
			templateUrl:"app/metricasubmit/html/metricasubmitDetalhe.html",
			controller: "metricasubmitDetalheCtrl",
			controllerAs:"$metricasubmitDetalheCtrl"

		};

	}
	
	function metricasubmitList(){

		return {

			restrict:"E",
			templateUrl:"app/metricasubmit/html/metricasubmitList.html",
			controller: "metricasubmitListCtrl",
			controllerAs:"$metricasubmitListCtrl"

		};

	}

	function metricasubmitGridView(){

		return {

			restrict:"E",
			templateUrl:"app/metricasubmit/html/metricasubmitGridView.html"

		};

	}

	function metricasubmitTableView(){

		return {

			restrict:"E",
			templateUrl:"app/metricasubmit/html/metricasubmitTableView.html"
			
		};

	}

	function metricasubmitForm(){

		return {

			restrict:"E",
			templateUrl:"app/metricasubmit/html/metricasubmitForm.html"
			
		};

	}

})();
