"use strict";
(function(){

	angular.module("stapi")
	.controller("habitosubmitDetalheCtrl", habitosubmitDetalheCtrl)
	.controller("habitosubmitListCtrl", habitosubmitListCtrl)
	.filter('habitoGroupBy', function(){
		return function(list, group_by) {

		var filtered = [];
		var prev_item = null;
		var group_changed = false;
		// this is a new field which is added to each item where we append "_CHANGED"
		// to indicate a field change in the list
		var new_field = group_by + '_CHANGED';

		// loop through each item in the list
		angular.forEach(list, function(item) {

			group_changed = false;

			// if not the first item
			if (prev_item !== null) {

				// check if the group by field changed
				if (prev_item[group_by] !== item[group_by]) {
					group_changed = true;
				}

			// otherwise we have the first item in the list which is new
			} else {
				group_changed = true;
			}

			// if the group changed, then add a new field to the item
			// to indicate this
			if (group_changed) {
				item[new_field] = true;
			} else {
				item[new_field] = false;
			}

			filtered.push(item);
			prev_item = item;

		});

		return filtered;
		};
	})
    


	var objectName = "HabitoSubmit";

	function habitosubmitDetalheCtrl($scope, $controller, item, functionToDetailNotify, objectName, stUtil){

		var ctrl = this;
		angular.extend(ctrl, $controller('genericDetalheController', {
			$scope: $scope,
			functionToDetailNotify: functionToDetailNotify,
			objectName: objectName,
			item: item
		}));
		

	}

	function habitosubmitListCtrl($scope, $controller, config, stCrudTools, stUtil, $route, dateUtil, stService){

		var ctrl = this;
		ctrl.verSomenteNaoCumpridos = 1;
		ctrl.today = new Date();

		ctrl.scope = $scope;
		
		ctrl.weekDay = (new Date().getDay()+1)+"";

		function setSubmitedDays(habito){

			stService.executeQuery("Select  count(*) from HabitoSubmit where disable=0 and habito.id = "+habito.id).then(function(data){

				habito.submitedDays = data.itens[0];

			});

		}
		ctrl.changeSubmit = function(habito){

			var index = stUtil.buscaOb(ctrl.submitedHabitsInToday , habito.id ,"habito.id");
			var habitoSubmit = ctrl.submitedHabitsInToday[index];

			if(!habitoSubmit) 
				habitoSubmit  = {habito:{id: habito.id}};

			if(habito.submitedInToday==false){

                habito.submitedDays--;
				stService.delete("HabitoSubmit",[habitoSubmit.id]).then(function(){

					getList();

				});



			}
			else {

				  habito.submitedDays++;
				var dataHoje = new Date();
				var dataHojeFormated = dateUtil.formatDate(dataHoje);
				habitoSubmit.submitedDate = dataHojeFormated;
				stService.save("HabitoSubmit", habitoSubmit).then(function(data){

					//getList();
				});

			}

		}

		var dataHoje = new Date();
		var dataHojeFormated = dateUtil.formatDate(dataHoje);


		//Objeto que define as opções para listagem dos itens
		var requestListParams = 	{
				objectName: objectName,
				maxItensPerPage: 0,
				querys: [ "submitedDate between '"+dataHojeFormated+"' and '"+dataHojeFormated+"'"]

		}


		function getList(){ 
			
			
			stService.getList(requestListParams).then(function(data){

				var submitedHabitsInToday = data.itens;
				ctrl.submitedHabitsInToday  = submitedHabitsInToday ;
				var ops= {
						objectName: "Habito",
						querys: ["(diasSemana like '%"+ctrl.weekDay+"%' or diasSemana is null or length(diasSemana)=0 )"]
						
				};
				stService.getList(ops).then(function(data){

					var habits= data.itens;
					ctrl.mergedHabits =  getMergedHabits(habits, submitedHabitsInToday);
					//getSubmitedDays();
				});
			});
			
		
		}getList();

		function getMergedHabits(habits, submitedHabits){

			var mergedHabits = [];

			for(var i in habits){

				var merged = habits[i];
				setSubmitedDays(merged)
				var index =stUtil.buscaOb(submitedHabits, habits[i].id ,"habito.id");
				merged.submitedInToday =index !=-1;
				mergedHabits.push(merged);
			}


			return mergedHabits;
		}


	}

})();
