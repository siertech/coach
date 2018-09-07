"use strict";
(function(){
	angular.module("adm") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/list",{

		template:"<list-list></list-list>",
	    
	}); 

})

})();
