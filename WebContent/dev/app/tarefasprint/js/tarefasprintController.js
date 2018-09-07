"use strict";
(function(){

	angular.module("stapiApp")
	.controller("tarefasprintDetalheCtrl", tarefasprintDetalheCtrl)
	.controller("tarefasprintListCtrl", tarefasprintListCtrl);

	var objectName = "TarefaSprint";

	function tarefasprintDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function tarefasprintListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/tarefasprint/html/tarefasprintDetalhe.html",
			detalheController: "tarefasprintDetalheCtrl",
			detalheControllerAs: "$tarefasprintDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: ' Buscar pelo nomeprincipal'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título", attr: "titulo", orderBy: true, labelIcon: "list"}
			
		];
	
		ctrl.data.orderBy = "titulo";
		ctrl.data.fixProperties = ctrl.fixProperties || {};
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9

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
