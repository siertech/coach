"use strict";
(function(){

	angular.module("stapi")
	.controller("relatorioDetalheCtrl", relatorioDetalheCtrl)
	.controller("relatorioListCtrl", relatorioListCtrl);

	var objectName = "Relatorio";

	function relatorioDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function relatorioListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/relatorio/html/relatorioDetalhe.html",
			detalheController: "relatorioDetalheCtrl",
			detalheControllerAs: "$relatorioDetalheCtrl",
			filtros:  [ 
				{attr:'_string.nome', label: 'Buscar pelo nome do relatorio'},
				{attr:'id', operator: '=', label: 'Buscar pelo id'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Descrição", attr: "descricao", orderBy: true, labelIcon: "show_chart", editable: false},
			
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
