
"use strict";
(function(){
angular.module("adm").controller("inicioCtrl",function($scope, stService, $mdColors, $mdColorUtil,  stChartUtil){
	
	  var valueColumn = "value";
	  var labelColumn="submitedDate";
	  var objectName="MetricaSubmit";
	  
	  var basicInfo = {
				qs:["metrica.id=13"],
				columns:labelColumn+","+valueColumn+" ",
				objeto:objectName,
				groupBy:labelColumn,
				extra:"order by "+labelColumn,
				max:0

		};
	  
	  stChartUtil.chartFactory($scope,basicInfo,$scope.periodColumn,function(proj){

			$scope.colors = [

				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("blue")),
				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("grey")),
				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("red")),
				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("green")),
				$mdColorUtil.rgbaToHex($mdColors.getThemeColor("yellow")),

				];
			
			var backendLabels =  proj.labels;
			
			//Só tem dados até dia 16/07
			var backendLabels =  proj.labels;
			var backendData = typeof proj.data[0] =='object' ?  proj.data[0] : proj.data;
			var data = backendData;
			var ultimaDataString = backendLabels[backendLabels.length-1];
			var dataFinalString = "2018-07-30"
		    //setando data1
		    var ultimaData = moment(ultimaDataString);
		    //setando data2
		    var dataFinal = moment(dataFinalString);
		    //tirando a diferenca da data2 - data1 em dias
		    
		    var diasRestantes = dataFinal.diff(ultimaData, 'days');
		    
		    var totalDias = backendLabels.length + diasRestantes;
		    
		    var labels = [];
		    
		    var count = 1;
		    
		    while(count<= totalDias){
		    	labels.push(count+"");
		    	count++;
		    }
			
			var numeroDias = labels.length;
			var meta = 88;
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
			
			$scope.labels = labels;
			  $scope.series = ['Ideal', 'Realizado'];
			  $scope.data = [
			    ideal,
			    data
			  ];
			
		});
	 
})

})();