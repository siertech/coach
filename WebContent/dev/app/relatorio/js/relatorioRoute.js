"use strict";
(function(){
	angular.module("stapi") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/relatorio",{

		template:"<relatorio-list></relatorio-list>",
	    
	}); 

})

})();
