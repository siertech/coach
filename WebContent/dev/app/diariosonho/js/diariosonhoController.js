"use strict";
(function(){

	angular.module("adm")
	.controller("diariosonhoDetalheCtrl", diariosonhoDetalheCtrl)
	.controller("diariosonhoListCtrl", diariosonhoListCtrl);

	var objectName = "DiarioSonho";

	function diariosonhoDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function diariosonhoListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/diariosonho/html/diariosonhoDetalhe.html",
			detalheController: "diariosonhoDetalheCtrl",
			detalheControllerAs: "$diariosonhoDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: 'Título do sonho'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título do sonho", attr: "titulo", orderBy: true, labelIcon: "local_hotel"}
			
		];
		
		ctrl.data.orderBy = "titulo";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9,

		}
		
		//Override
		ctrl.data.saveSuccesResolve = saveSuccessResolve;
		ctrl.data.cancelResolve = cancelResolve;
		
		function saveSuccessResolve(obj){
			stUtil.showMessage("","Salvo com sucesso!");
			obj.$mdDialog.hide();
			$route.reload();
		}
		
		function cancelResolve(){
			
		}

		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
