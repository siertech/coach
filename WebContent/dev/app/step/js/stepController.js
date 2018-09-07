"use strict";
(function(){

	angular.module("adm")
	.controller("stepDetalheCtrl", stepDetalheCtrl)
	.controller("stepListCtrl", stepListCtrl);

	var objectName = "Step";

	function stepDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil, stService, $mdDialog){

		var ctrl = this;
		item = item ||{};
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
		
		ctrl.data.mostrarDescricao = function(descricao){
			

			$mdDialog.show(
				      $mdDialog.alert()
				        
				        .multiple(true)
				        .clickOutsideToClose(true)
				        .title('Descrição')
				        .htmlContent(descricao)
				        .ariaLabel('Descrição')
				        .ok('OK')
				       
				    );
			
		}
		
		ctrl.data.saveFunction = function(item){
			
			stService.save(objectName, item).then(function(data){
				ctrl.data.item =data.item;
				stUtil.showMessage("","Salvo com sucesso!");
				var steps = ctrl.steps;
				for(var i in steps){
					steps[i].step = data.item;
					stService.save("StepItem", steps[i])
				}
				
			});
			
		}
		
		ctrl.changeStepDescriptor  = function(querys){

			getStepByDescriptor();
		}
		
		function getStepByDescriptor(){
			
			var ops = {

					objectName: "StepItem",
					querys: ["stepDescriptor.id = "+ctrl.data.item.stepDescriptor.id]
			};
			stService.getList(ops).then(function(data){

				var items = data.itens;;
				for(var i in items){
					items[i].id=0;
					items[i].ok="";
					items[i].stepDescriptor = null;
				}
				ctrl.steps = items;
				
			});
		}
		
    

	}

	function stepListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;

		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/step/html/stepDetalhe.html",
			detalheController: "stepDetalheCtrl",
			detalheControllerAs: "$stepDetalheCtrl",
			filtros:  [ 
				{attr:'titulo', label: ' Buscar pelo título'}

				]
		}));

		ctrl.data.tableColumns = [

			{label: "Título", attr: "titulo", orderBy: true, labelIcon: "format_list_numbered"}

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
