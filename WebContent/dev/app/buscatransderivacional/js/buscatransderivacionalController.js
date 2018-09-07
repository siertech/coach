"use strict";
(function(){

	angular.module("adm")
	.controller("buscatransderivacionalDetalheCtrl", buscatransderivacionalDetalheCtrl)
	.controller("buscatransderivacionalListCtrl", buscatransderivacionalListCtrl)
	.filter('resolvidoSimNao', function() {
	  return function(value) {
	    var res =  value == 0? "NÃO" :"SIM";
	    return res;
	  };
	})

	var objectName = "BuscaTransderivacional";

	function buscatransderivacionalDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
	
	}

	function buscatransderivacionalListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/buscatransderivacional/html/buscatransderivacionalDetalhe.html",
			detalheController: "buscatransderivacionalDetalheCtrl",
			detalheControllerAs: "$buscatransderivacionalDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: 'Título'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Título", attr: "titulo", orderBy: true, labelIcon: "youtube_searched_for"},
			{label: "Resolvido", attr: "resolvido", filter: "resolvidoSimNao"}
			
		];
		
		ctrl.data.orderBy = "titulo";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9,
				extra: "order by resolvido"

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

		//Inicializa a lista de objetos
		ctrl.data.getList();

	}

})();
