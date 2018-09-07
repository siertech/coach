"use strict";
(function(){

	angular.module("stapi")
	.controller("metricaDetalheCtrl", metricaDetalheCtrl)
	.controller("metricaListCtrl", metricaListCtrl);

	var objectName = "Metrica";

	function metricaDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function metricaListCtrl($scope, $controller, config, stCrudTools, stUtil, $route, dateUtil, stService){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/metrica/html/metricaDetalhe.html",
			detalheController: "metricaDetalheCtrl",
			detalheControllerAs: "$metricaDetalheCtrl",
			filtros:  [ 
				{attr:'descricao', label: 'Buscar pela descrição'}
				
				]
		}));
		
		
		ctrl.sonoDiaSemana = {
				  de: '1991-09-15',
				  ate: new Date(),
				  qs: ["metrica.descricao = 'Sono' "],
				  periodColumn:"submitedDate",
				  labelColumn:"dayOfWeek(submitedDate)",
				  valueColumn:"avg(value)",
				  objeto:"MetricaSubmit"
		}
		
		ctrl.submitMetric = function(item){
			
			var submit = {};
			submit.metrica = {id: item.id};
			submit.submitedDate = item.submitedDate || dateUtil.formatDate(new Date());
			submit.value  = item.value || "";

			stService.save("MetricaSubmit", submit).then(function(){
				
				stUtil.showMessage("","Métrica submetida com sucesso!");
				
			});
			
		}
		
		ctrl.data.tableColumns = [
			
			{label: "Descrição", attr: "descricao", orderBy: true, labelIcon: "list"},
			{label: "Unidade", attr: "unidade", orderBy: true}
			
		];
		
		ctrl.data.orderBy = "descricao";
		
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
