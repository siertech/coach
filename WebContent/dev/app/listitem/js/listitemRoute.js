"use strict";
(function(){
	angular.module("adm") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/listitem",{

		template:"<listitem-list></listitem-list>",
	    
	}); 

})

})();
