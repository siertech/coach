"use strict";
(function(){
	angular.module("adm") 
	.config(function($routeProvider, $httpProvider){

	//Rota para listagem dos objetos
	$routeProvider.when("/step",{

		templateUrl:"app/step/html/stepRoute.html",
	    
	}); 

})

})();
