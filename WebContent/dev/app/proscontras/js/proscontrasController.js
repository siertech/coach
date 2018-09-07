"use strict";
(function(){

	angular.module("adm")
	.controller("proscontrasDetalheCtrl", proscontrasDetalheCtrl)
	.controller("proscontrasListCtrl", proscontrasListCtrl);

	var objectName = "ProsContras";

	function proscontrasDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function proscontrasListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/proscontras/html/proscontrasDetalhe.html",
			detalheController: "proscontrasDetalheCtrl",
			detalheControllerAs: "$proscontrasDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: ' Buscar pelo nomeprincipal'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Tìtulo", attr: "titulo", orderBy: true, labelIcon: "thumbs_up_down"}
			
		];
		
		ctrl.data.orderBy = "titulo";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9,

		}
		
		//Override
	
		ctrl.data.saveSuccesResolve = saveSuccessResolve;
		
		function saveSuccessResolve(obj){
			stUtil.showMessage("","Salvo com sucesso!");
			ctrl.data.getList();
		}
		

		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
