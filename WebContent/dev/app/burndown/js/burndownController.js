"use strict";
(function(){

	angular.module("stapi")
	.controller("burndownDetalheCtrl", burndownDetalheCtrl)
	.controller("burndownListCtrl", burndownListCtrl);

	var objectName = "BurnDown";

	function burndownDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil, stChartUtil ,$mdColorUtil, $mdColors){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
		
		ctrl.burnDownChart = {};
		montarBurnDown();
		function montarBurnDown(){
		
			if(!ctrl.data.item)
				return;
			
			var valueColumn = ctrl.data.item.valueColumn;
			var labelColumn = ctrl.data.item.labelColumn;
			var objectName =  ctrl.data.item.objectName;
			var dataFinalString = ctrl.data.item.dataFim;
			var dataInicialString = ctrl.data.item.dataCadastro;
			var meta = ctrl.data.item.valueMeta;
			
			
			var querys = ctrl.data.item.querys || [];
			if(typeof querys == 'string')
				querys = querys.split(",");
			  
			  var basicInfo = {
						qs:querys || [],
						columns:labelColumn+","+valueColumn+" ",
						objeto:objectName,
						groupBy:labelColumn,
						extra:"order by "+labelColumn,
						max:0

				};
			  
			  stChartUtil.chartFactory($scope,basicInfo,$scope.periodColumn,function(proj){

				  ctrl.burnDownChart.colors = [

						$mdColorUtil.rgbaToHex($mdColors.getThemeColor("blue")),
						$mdColorUtil.rgbaToHex($mdColors.getThemeColor("red")),
						$mdColorUtil.rgbaToHex($mdColors.getThemeColor("grey")),
						$mdColorUtil.rgbaToHex($mdColors.getThemeColor("green")),
						$mdColorUtil.rgbaToHex($mdColors.getThemeColor("yellow")),

						];
					
					var backendLabels =  proj.labels;
					
					//Só tem dados até dia 16/07
					var backendLabels =  proj.labels;
					var backendData = typeof proj.data[0] =='object' ?  proj.data[0] : proj.data;
					var dataOb = {};
					
					for(var i in backendLabels){
						dataOb[ backendLabels[i]] = backendData[i];
					}
					
					var dataInicial = moment(dataInicialString);
					var dataFinal  = moment(dataFinalString);
					var labels= getEnumeratedDates(dataInicial, dataFinal);
				    var data = [];
				    var last = "";
					 for(var k in labels){
						 
						 var value = dataOb[labels[k]] || last;
						 data.push(value);
						 
						 if(value.length>0){
							last = value;
						 }
						 
					 }
					 
					 debugger;
					
					function getEnumeratedDates(startDate, endDate) {
					    startDate = moment(startDate);
					    endDate = moment(endDate);

					    var now = startDate, dates = [];

					    while (now.isBefore(endDate) || now.isSame(endDate)) {
					        dates.push(now.format('YYYY-MM-DD'));
					        now.add(1, 'days');
					    }
					    return dates;
					};
					
					var numeroDias = labels.length;
					var inicial = parseFloat(backendData[0]);
					var ideal = [];
					var realizado = [];
					var razaoIdeal =  (- (meta) + inicial) / ( numeroDias -1);
					var idealValue = inicial;
					var i= 0;
					while(i<numeroDias){
						
						if(idealValue<0)
							idealValue= 0;
						ideal.push(idealValue);
						idealValue = idealValue - razaoIdeal;
						i++;
					}
					
					ctrl.burnDownChart.labels  = labels;
					ctrl.burnDownChart.series = ['Ideal', 'Realizado'];
					ctrl.burnDownChart.data = [
					    ideal,
					    data
					  ];
					  
					
				});
			
			
		}
		
	
	}

	function burndownListCtrl($scope, $controller, config, stCrudTools, stUtil, $route){

		var ctrl = this;
		
		angular.extend(ctrl, $controller('genericListController', {
			$scope: $scope,
			objectName: objectName,
			detalheTemplateUrl:"app/burndown/html/burndownDetalhe.html",
			detalheController: "burndownDetalheCtrl",
			detalheControllerAs: "$burndownDetalheCtrl",
			filtros:  [ 
				{attr:'_string.nome', label: 'Buscar pelo nome do burndown'},
				{attr:'id', operator: '=', label: 'Buscar pelo id'}

				]
		}));
		
		ctrl.data.tableColumns = [
			
			{label: "Descrição", attr: "descricao", orderBy: true}
			
		];
		
		ctrl.data.orderBy = "_string.nome";
		
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
