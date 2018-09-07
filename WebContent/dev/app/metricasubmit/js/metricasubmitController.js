"use strict";
(function(){

	angular.module("stapi")
	.controller("metricasubmitDetalheCtrl", metricasubmitDetalheCtrl)
	.controller("metricasubmitListCtrl", metricasubmitListCtrl);

	var objectName = "MetricaSubmit";

	function metricasubmitDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function metricasubmitListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/metricasubmit/html/metricasubmitDetalhe.html",
			detalheController: "metricasubmitDetalheCtrl",
			detalheControllerAs: "$metricasubmitDetalheCtrl",
			filtros:  [ 
				{attr:'_string.nome', label: 'Buscar pelo nome do metricasubmit'},
				{attr:'id', operator: '=', label: 'Buscar pelo id'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Data", attr: "submitedDate", orderBy: true, labelIcon: "date_range", filter: "date: dd/MM/yyyy (EEEE)"},
			{label: "Métrica", attr: "metrica.descricao", orderBy: true},
			{label: "Valor", attr: "value", filter: "number:2"},
			{label: "Unidade", attr: "metrica.unidade"}
		
		];
		
		ctrl.data.orderBy = "_string.nome";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9

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
