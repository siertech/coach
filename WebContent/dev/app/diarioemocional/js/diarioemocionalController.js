"use strict";
(function(){

	angular.module("stapi")
	.controller("diarioemocionalDetalheCtrl", diarioemocionalDetalheCtrl)
	.controller("diarioemocionalListCtrl", diarioemocionalListCtrl);

	var objectName = "DiarioEmocional";

	function diarioemocionalDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));

	}

	function diarioemocionalListCtrl($scope, $controller, config, stCrudTools, stUtil, $route, stService, dateUtil){

		var ctrl = this;
		var hoje = dateUtil.formatDate(new Date());

		var emotions = [
			{icon: "sentiment_very_dissatisfied",value: 1, color: 'red'},
			{icon: "sentiment_dissatisfied",value: 2, color: 'orange'},
			{icon: "sentiment_dissatisfied",value: 3, color: 'amber'},
			{icon: "sentiment_neutral",value: 4, color: 'lime'},
			{icon: "sentiment_satisfied",value: 5, color: 'light-green'},
			{icon: "sentiment_satisfied",value: 6, color: 'green'},
			{icon: "sentiment_very_satisfied",value: 7, color: 'teal'}
			];

		ctrl.emotions = emotions ;

		

		ctrl.submitEmotion = function(emo){

			var diario= {};
			diario.submitedDate = dateUtil.formatDate(new Date());
			diario.value  = emo.value;
			stService.save("DiarioEmocional", diario).then(function(data){

				stUtil.showMessage("","Cadastrado com sucesso");

			});


		}

		

	}

})();
