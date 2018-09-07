"use strict";
(function(){
	angular.module("stapi") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/rodadavida",{

		template:"<rodadavida-list></rodadavida-list>",
	    
	}); 

})

})();
