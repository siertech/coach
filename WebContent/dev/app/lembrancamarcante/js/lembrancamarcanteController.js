"use strict";
(function(){

	angular.module("stapi")
	.controller("lembrancamarcanteDetalheCtrl", lembrancamarcanteDetalheCtrl)
	.controller("lembrancamarcanteListCtrl", lembrancamarcanteListCtrl);

	var objectName = "LembrancaMarcante";

	function lembrancamarcanteDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function lembrancamarcanteListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/lembrancamarcante/html/lembrancamarcanteDetalhe.html",
			detalheController: "lembrancamarcanteDetalheCtrl",
			detalheControllerAs: "$lembrancamarcanteDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: 'Buscar pelo título da lembrança'},
				{attr:'categoria', label: 'Categoria'}
				
				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título", attr: "titulo", orderBy: true, labelIcon: "list"},
			{label: "Categoria", attr: "categoria", filter: "uppercase", orderBy: true}
			
		];
		
		ctrl.data.orderBy = "_string.nome";
		
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
