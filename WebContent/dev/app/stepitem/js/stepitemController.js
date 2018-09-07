"use strict";
(function(){

	angular.module("adm")
	.controller("stepitemDetalheCtrl", stepitemDetalheCtrl)
	.controller("stepitemListCtrl", stepitemListCtrl);

	var objectName = "StepItem";

	function stepitemDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function stepitemListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/stepitem/html/stepitemDetalhe.html",
			detalheController: "stepitemDetalheCtrl",
			detalheControllerAs: "$stepitemDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: ' Buscar pelo nomeprincipal'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título", attr: "titulo", orderBy: true, labelIcon: "format_list_numbered"}
			
		];
		
		ctrl.data.orderBy = "titulo";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9,

		}
		
		//Override
		/*
		ctrl.data.saveSuccesResolve = saveSuccessResolve;
		ctrl.data.cancelResolve = cancelResolve;
		
		function saveSuccessResolve(obj){
			stUtil.showMessage("","Salvo com sucesso!");
			obj.$mdDialog.hide();
			$route.reload();
		}
		
		function cancelResolve(){
			
		}
		*/

		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
