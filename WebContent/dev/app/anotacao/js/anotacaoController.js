"use strict";
(function(){

	angular.module("stapi")
	.controller("anotacaoDetalheCtrl", anotacaoDetalheCtrl)
	.controller("anotacaoListCtrl", anotacaoListCtrl);

	var objectName = "Anotacao";

	function anotacaoDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function anotacaoListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/anotacao/html/anotacaoDetalhe.html",
			detalheController: "anotacaoDetalheCtrl",
			detalheControllerAs: "$anotacaoDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: 'Buscar pelo titulo'},
				{attr:'categoria', label: 'Buscar pela categoria'}
		

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Data", attr: "dataCadastro", orderBy: true, labelIcon: "date_range", filter: "date:dd/MM/yyyy"},
			{label: "Título", attr: "titulo", orderBy: true, editable: true, placeholder: "Título da anotação"},
			{label: "Categoria", attr: "categoria", orderBy: true, editable: true, placeholder: "Categoria"}
			
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
