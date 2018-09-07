"use strict";
(function(){

	angular.module("stapi")
	.controller("metaDetalheCtrl", metaDetalheCtrl)
	.controller("metaListCtrl", metaListCtrl)
	.filter('metaCountDown', function(dateUtil) {
		  return function(input) {
		    
			  if(!input)
				  return "";
			  
			  var hoje = new Date();
			  var fim = dateUtil.getDate(input);
			  var interval = moment(fim).diff(hoje);
			  var duration = moment.duration(interval);
           
              
              var anos = duration.years();
              var meses = duration.months();
              var dias = duration.days();
              
              var comp = "";
              if(anos>0)
            	  comp+=anos+" anos, ";
              
              if(meses>0)
            	  comp+=meses+" meses, ";
              
              if(dias>0)
            	  comp+=dias+" dias";
              
              return comp;
			 
			  
		  };
		});

	var objectName = "Meta";

	function metaDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil, stService, dateUtil){

		 
		var ctrl = this;
		item = item || {};
		
		 item.diasCorridos = moment(dateUtil.formatDate(new Date())).diff(dateUtil.formatDate(item.dataCadastro), "days");
		 item.diasRestantes = moment(dateUtil.formatDate(item.data)).diff(dateUtil.formatDate(new Date()), "days");
		 item.diasTotais= moment(dateUtil.formatDate(item.data)).diff(dateUtil.formatDate(item.dataCadastro), "days");
		
		
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
		
		stService.getList({
			objectName: "Habito",
			querys: ["meta.id="+item.id], 
			maxItensPerPage: 0
			
			}
		).then(function(data){
			
			ctrl.data.item.habitos = data.itens;
			
		});
		
     ctrl.data.changeAlcancada = function(item){
			
			if(item.alcancada==1){
			   item.dataQueFoiAlcancada = dateUtil.formatDate(new Date);
			}
			
			stService.save(objectName, item);
		}
		
		ctrl.data.onHabitoChange = function(value, old, index){
			
			value.meta = {id: item.id};
			stService.save("Habito", value).then(function(data){
				
				ctrl.data.item.habitos[index] =  data.item;
			});
		}
	
	}

	function metaListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/meta/html/metaDetalhe.html",
			detalheController: "metaDetalheCtrl",
			detalheControllerAs: "$metaDetalheCtrl",
			filtros:  [ 
				{attr:'_string.titulo', label: 'Buscar pelo título da meta'},
				

				]
		}));
		
		

		ctrl.data.tableColumns = [
			
			{label: "Título", attr: "titulo", orderBy: true, editable: true, placeholder: "Informe o nome"},
			{label: "Resta(m)", attr: "data", filter: "metaCountDown"}
			
		];
		
		ctrl.data.orderBy = "titulo";
		
		//Objeto que define as opções para listagem dos itens
		ctrl.data.requestListParams = {	
				objectName: objectName,
				maxItensPerPage: config.confs.maxItemsPerPage || 9,
				querys: stUtil.transformJSONToSqlComparators(ctrl.fixProperties)

		}
		
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
