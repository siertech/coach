"use strict";
(function(){
	angular.module("adm") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/sprint",{

		template:"<sprint-list ></sprint-list>",
	    
	}); 

})

})();
