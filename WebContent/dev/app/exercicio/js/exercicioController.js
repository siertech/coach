"use strict";
(function(){

	angular.module("stapi")
	.controller("exercicioDetalheCtrl", exercicioDetalheCtrl)
	.controller("exercicioListCtrl", exercicioListCtrl);

	var objectName = "Exercicio";

	function exercicioDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function exercicioListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/exercicio/html/exercicioDetalhe.html",
			detalheController: "exercicioDetalheCtrl",
			detalheControllerAs: "$exercicioDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: 'Título do exercício'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título do exercício", attr: "titulo", orderBy: true, labelIcon: "directions_walk"}
			
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
