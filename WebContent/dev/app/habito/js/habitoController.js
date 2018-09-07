"use strict";
(function(){

	angular.module("stapi")
	.controller("habitoDetalheCtrl", habitoDetalheCtrl)
	.controller("habitoListCtrl", habitoListCtrl);

	var objectName = "Habito";

	function habitoDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function habitoListCtrl($scope, $controller, config, stCrudTools, stUtil, $route, stService){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/habito/html/habitoDetalhe.html",
			detalheController: "habitoDetalheCtrl",
			detalheControllerAs: "$habitoDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: 'Buscar pelo título do habito'},
				{attr:'id', operator: '=', label: 'Buscar pelo id'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Hábito", attr: "titulo", orderBy: true, labelIcon: "list", editable: false, placeholder: "Informe o nome"},
			
		];
		
		ctrl.data.orderBy = "titulo";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9

		}
		
		/*
		stService.getList(ctrl.data.requestListParams).then(function(data){
			
			var itens = data.itens;
			for(var i in itens){
				
				var item = itens[i];
				item.titulo = item._string.titulo;
				ctrl.data.saveFunction(item);
			}
			
		});
		*/
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
