"use strict";
(function(){
	angular.module("stapi") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/exercicio",{

		template:"<exercicio-list></exercicio-list>",
	    
	}); 

})

})();
