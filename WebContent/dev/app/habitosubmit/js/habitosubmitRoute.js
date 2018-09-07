"use strict";
(function(){
	angular.module("stapi") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/habitosubmit",{

		template:"<habitosubmit-list></habitosubmit-list>",
	    
	}); 

})

})();
