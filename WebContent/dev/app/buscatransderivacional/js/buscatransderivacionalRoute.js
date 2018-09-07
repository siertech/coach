"use strict";
(function(){
	angular.module("adm") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/buscatransderivacional",{

		template:"<buscatransderivacional-list></buscatransderivacional-list>",
	    
	}); 

})

})();
