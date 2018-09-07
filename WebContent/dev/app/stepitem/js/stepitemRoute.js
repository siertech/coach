"use strict";
(function(){
	angular.module("adm") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/stepitem",{

		template:"<stepitem-list></stepitem-list>",
	    
	}); 

})

})();
