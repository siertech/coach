"use strict";

(function(){

	angular.module("stapi")

	.controller("menuCtrl", menuCtrl);

	function menuCtrl($scope, $controller, $location){

		var ctrl = this;
		ctrl.scope = $scope;
		
		ctrl.toPath = function(path){
			
			$location.path(path);
		}

		var menuItems =  [
			
			{path: "list", icon:"playlist_add_check", label:"Listas"},
			{path: "Sprint's", icon:"skip_next", label:"Prós e Contras"},
			{path: "proscontras", icon:"thumbs_up_down", label:"Prós e Contras"},
			{path: "step", icon:"format_list_numbered", label:"Step By Step"},
			{path: "inicio", icon:"home", label:"Início"},
			{path: "comportamento", icon:"directions_walk", label:"Comportamentos"},
			{path: "buscatransderivacional", icon:"youtube_searched_for", label:"Busca Transderivacional"},
			{path: "habitosubmit", icon:"check", label:"Verificador de hábitos"},
			{path: "missao", icon:"person", label:"Missão"},
			{path: "habito", icon:"list", label:"Hábitos"},
			{path: "meta", icon:"playlist_add_check", label:"Metas"},
			{path: "valor", icon:"list", label:"Valores"},
			{path: "metrica", icon:"assessment", label:"Métricas"},
			{path: "papel", icon:"attach_file", label:"Papéis"},
			{path: "anotacao", icon:"event_note", label:"Anotações"},
			{path: "lembrancamarcante", icon:"control_point", label:"Lembranças marcantes"},
			{path: "fobia", icon:"none", label:"Medos/Fobias"},
			{path: "diarioemocional", icon:"event_available", label:"Diário emocional"},
			{path: "frequenciasonora", icon:"surround_sound", label:"Frequências sonoras"},
			{path: "todaytask", icon:"today", label:"Tarefas do dia"},
			{path: "ritual", icon:"list_", label:"Rituais"},
			{path: "burndown", icon:"multiline_chart", label:"Burn Down"},
			{path: "exercicio", icon:"directions_walk", label:"Exercícios"},
			{path: "diariosonho", icon:"local_hotel", label:"Diário de sonhos"},
			{path: "relatorio", icon:"show_chart", label:"Relatórios"},
			
			
			

			];

		angular.extend(ctrl, $controller('stMenuController', {
			$scope: $scope,
			menuItems: menuItems,
			sidenavId:  "side-nav-principal"
		}));


	}	

})();

