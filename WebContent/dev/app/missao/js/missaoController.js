"use strict";
(function(){

	angular.module("stapi")
	.controller("missaoDetalheCtrl", missaoDetalheCtrl)
	.controller("missaoListCtrl", missaoListCtrl);

	var objectName = "Missao";

	function missaoDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function missaoListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/missao/html/missaoDetalhe.html",
			detalheController: "missaoDetalheCtrl",
			detalheControllerAs: "$missaoDetalheCtrl",
			filtros:  [ 
				{attr:'_string.nome', label: 'Buscar pelo nome do missao'},
				{attr:'id', operator: '=', label: 'Buscar pelo id'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Nome", attr: "_string.nome", orderBy: true, labelIcon: "person", editable: true, placeholder: "Informe o nome"},
			{label: "Atributo 2", attr: "_string.atributo2", orderBy: false, editable: false,  placeholder: "Digite um valor"},
			{label: "Atributo 3", attr: "_string.atributo3", orderBy: false, editable: false},
			{label: "Atributo 4", attr: "_string.atributo4", orderBy: false, editable: false},
			{label: "Preço da hora", attr: "_double.precoHora", orderBy: true, editable: true, filter: "number:2"}
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
			stUtil.showMessage("","O objeto foi salvo com sucesso no override!");
			obj.$mdDialog.hide();
			$route.reload();
		}
		
		function cancelResolve(){
			
		}

		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
