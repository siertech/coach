"use strict";
(function(){

	angular.module("adm")
	.controller("metascumpridasDetalheCtrl", metascumpridasDetalheCtrl)
	.controller("metascumpridasListCtrl", metascumpridasListCtrl);

	var objectName = "Meta";

	function metascumpridasDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function metascumpridasListCtrl($scope, $controller, config, stCrudTools, stUtil, $route, dateUtil, stService){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/metascumpridas/html/metascumpridasDetalhe.html",
			detalheController: "metascumpridasDetalheCtrl",
			detalheControllerAs: "$metascumpridasDetalheCtrl",
			filtros:  [ 
				{attr:'', label: ' Buscar pelo nomeprincipal'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "", attr: "", orderBy: true, labelIcon: ""}
			
		];
		
		ctrl.data.orderBy = "";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9,
				querys: ["alcancada=1"]
				

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
		
		ctrl.data.getList = function(){
			
			stService.getList(ctrl.data.requestListParams).then(function(data){
				
				
				var obs = data.itens;
				for(var i in obs){
					
					obs[i].daysSinceAlcancada = moment(obs[i].dataQueFoiAlcancada).diff(dateUtil.formatDate(obs[i].dataCadastro), "days");
				}
				ctrl.data.objetos = obs;
			});
		}

		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
