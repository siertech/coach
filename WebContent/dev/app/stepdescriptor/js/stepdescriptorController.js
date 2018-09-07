"use strict";
(function(){

	angular.module("adm")
	.controller("stepdescriptorDetalheCtrl", stepdescriptorDetalheCtrl)
	.controller("stepdescriptorListCtrl", stepdescriptorListCtrl);

	var objectName = "StepDescriptor";

	function stepdescriptorDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil, stService){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
		
		ctrl.data.saveStepItem = function(step){
			
			stService.save("StepItem", step).then(function(){
				
				stUtil.showMessage(""," Salvo com sucesso!");
			});
		}
		
		
	
	}

	function stepdescriptorListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/stepdescriptor/html/stepdescriptorDetalhe.html",
			detalheController: "stepdescriptorDetalheCtrl",
			detalheControllerAs: "$stepdescriptorDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: ' Buscar pelo título'}

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
		

		ctrl.data.saveSuccesResolve = saveSuccessResolve;
		
		function saveSuccessResolve(obj){
			stUtil.showMessage("","Salvo com sucesso!");
			obj.$mdDialog.hide();
			ctrl.data.getList();
		}
		
		
	
		ctrl.data.saveSuccesResolve = saveSuccessResolve;
		
		function saveSuccessResolve(obj){
			stUtil.showMessage("","Salvo com sucesso!");
			ctrl.data.getList();
		}
		
		
		
		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
