"use strict";
(function(){

	angular.module("stapi")
	.controller("ritualDetalheCtrl", ritualDetalheCtrl)
	.controller("ritualListCtrl", ritualListCtrl);

	var objectName = "Ritual";

	function ritualDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function ritualListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/ritual/html/ritualDetalhe.html",
			detalheController: "ritualDetalheCtrl",
			detalheControllerAs: "$ritualDetalheCtrl",
			filtros:  [ 
				{attr:'_string.nome', label: 'Buscar pelo título do ritual'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título", attr: "titulo", orderBy: true},
	
		];
		
		ctrl.data.orderBy = "titulo";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9,

		}
		
		

		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
