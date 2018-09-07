"use strict";
(function(){

	angular.module("stapi")
	.controller("rodadavidaDetalheCtrl", rodadavidaDetalheCtrl)
	.controller("rodadavidaListCtrl", rodadavidaListCtrl);

	var objectName = "RodaDaVida";

	function rodadavidaDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function rodadavidaListCtrl($scope, $controller, config, stCrudTools, stUtil, $route, $mdColorUtil, $mdColors){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/rodadavida/html/rodadavidaDetalhe.html",
			detalheController: "rodadavidaDetalheCtrl",
			detalheControllerAs: "$rodadavidaDetalheCtrl",
			filtros:  [ 
				{attr:'_string.nome', label: 'Buscar pelo nome do rodadavida'},
				{attr:'id', operator: '=', label: 'Buscar pelo id'}

				]
		}));
		
		
		
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
		ctrl.data.getList().then(function(data){
			ctrl.rodaDaVida = data.itens[0] || {};
			ctrl.rodaDaVida.id = 0;
			montarChart(ctrl.rodaDaVida);
			
		});
		
		function montarChart(rodaDaVida){
			
			var data = [];
			var labels = [];
			for(var key in rodaDaVida.metricas ){
				
				labels.push(key);
				data.push(parseInt(rodaDaVida.metricas[key]));
			}
			
			var colors = [

				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("blue")),
				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("grey")),
				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("red")),
				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("green")),
				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("yellow")),

				];
			
			ctrl.chart = {
				data: data,
				labels : labels,
				colors: colors
			};
		
		}

	}

})();
