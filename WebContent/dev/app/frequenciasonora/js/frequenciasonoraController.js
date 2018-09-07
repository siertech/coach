"use strict";
(function(){

	angular.module("stapi")
	.controller("frequenciasonoraDetalheCtrl", frequenciasonoraDetalheCtrl)
	.controller("frequenciasonoraListCtrl", frequenciasonoraListCtrl);

	var objectName = "FrequenciaSonora";

	function frequenciasonoraDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function frequenciasonoraListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/frequenciasonora/html/frequenciasonoraDetalhe.html",
			detalheController: "frequenciasonoraDetalheCtrl",
			detalheControllerAs: "$frequenciasonoraDetalheCtrl",
			filtros:  [ 
				{attr:'tipo', label: 'Buscar pelo tipo de frequencia'},
				{attr:'efeitos', label: 'Buscar pelo efeito causado'},

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título", attr: "titulo", orderBy: true, labelIcon: "list"},
			{label: "URL", attr: "url"},
			{label: "Tipo", attr: "tipo", orderBy: true, filter: "uppercase"},
			{label: "Efeitos", attr: "efeitos"}
			
		];
		
		ctrl.data.orderBy = "tipo";
		
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
