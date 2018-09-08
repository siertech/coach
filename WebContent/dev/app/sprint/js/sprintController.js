"use strict";
(function(){

	angular.module("adm")
	.controller("sprintDetalheCtrl", sprintDetalheCtrl)
	.controller("sprintListCtrl", sprintListCtrl);

	var objectName = "Sprint";

	function sprintDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function sprintListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/sprint/html/sprintDetalhe.html",
			detalheController: "sprintDetalheCtrl",
			detalheControllerAs: "$sprintDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: ' Buscar pelo nomeprincipal'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título", attr: "titulo", orderBy: true, labelIcon: "list"},
			{label: "Início", attr: "inicio", filter: "date: dd/MM/yyyy"},
			{label: "Fim", attr: "fim", filter: "date: dd/MM/yyyy"},
			{label: "Resta(m)", attr: "fim", filter: "metaCountDown"},
			{label: "Meta", attr: "meta.titulo"}
			
		];
	
		ctrl.data.orderBy = "titulo";
		ctrl.data.fixProperties = ctrl.fixProperties || {};
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				extra: "order by  inicio ASC",
				maxItensPerPage: config.confs.maxItemsPerPage || 25

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
