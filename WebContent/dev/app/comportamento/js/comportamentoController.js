"use strict";
(function(){

	angular.module("adm")
	.controller("comportamentoDetalheCtrl", comportamentoDetalheCtrl)
	.controller("comportamentoListCtrl", comportamentoListCtrl);

	var objectName = "Comportamento";

	function comportamentoDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function comportamentoListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/comportamento/html/comportamentoDetalhe.html",
			detalheController: "comportamentoDetalheCtrl",
			detalheControllerAs: "$comportamentoDetalheCtrl",
			filtros:  [ 
				{attr:'descricao', label: ' Buscar pelo nomeprincipal'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Descrição do comportamento", attr: "descricao", orderBy: true, labelIcon: "list"}
			
		];
		
		ctrl.data.orderBy = "descricao";
		
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
