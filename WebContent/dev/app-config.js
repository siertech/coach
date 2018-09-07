"use strict";
(function(){
var app;
try{
	app  = angular.module("adm",["stapi", "youtube-embed","mdSteppers", "ngSimditor"]);
}catch(e){
	window.alert(e);
}

app.factory('config',function(){

	return {
		  
		scope: "static",
		confs:{
				path: "Coach",
				securityPaths: "all", //paths da aplicação onde a autenticação no sistema é necessária
				appVersion: "1.0",
				initialPath: "/inicio",
				loginPath: "/login",
				notFoundPath:"/notfound",
				pathsToHideMenu: ["/login"] //Nos paths definidos aqui o menu não será exibido
		}
	}

});

app.config(function($provide) {

	  // simditor global options customize
	  $provide.decorator('simditorOptions', ['$delegate', function(simditorOptions) {
		  
		  Simditor.locale= "pt-BR";
	    simditorOptions.toolbar = [
	      'title',
	      'bold',
	      'italic',
	      'underline',
	      'strikethrough',
	      'color',
	      'ol',
	      'ul',
	      'blockquote',
	      'code',
	      'table',
	      'link',
	      'image',
	      'hr',
	      'indent',
	      'outdent',
	      'alignment',
	    ];
	    
	    simditorOptions.codeLanguages =  [
	    	  { name: 'Bash', value: 'bash' },
	    	  { name: 'C++', value: 'c++' },
	    	  { name: 'C#', value: 'cs' },
	    	  { name: 'CSS', value: 'css' },
	    	  { name: 'Erlang', value: 'erlang' },
	    	  { name: 'Less', value: 'less' },
	    	  { name: 'Sass', value: 'sass' },
	    	  { name: 'Diff', value: 'diff' },
	    	  { name: 'CoffeeScript', value: 'coffeescript' },
	    	  { name: 'HTML,XML', value: 'html' },
	    	  { name: 'JSON', value: 'json' },
	    	  { name: 'Java', value: 'java' },
	    	  { name: 'JavaScript', value: 'js' },
	    	  { name: 'Markdown', value: 'markdown' },
	    	  { name: 'Objective C', value: 'oc' },
	    	  { name: 'PHP', value: 'php' },
	    	  { name: 'Perl', value: 'parl' },
	    	  { name: 'Python', value: 'python' },
	    	  { name: 'Ruby', value: 'ruby' },
	    	  { name: 'SQL', value: 'sql'}
	    	];

	   
	   
	    simditorOptions.toolbarFloat =  true;
	    simditorOptions.toolbarFloatOffset =  0;
	    simditorOptions.toolbarHidden = false;
	    return simditorOptions;
	  }]);

	});



app.run(['ngMdIconService', function(ngMdIconService){
	
	
	var fobia =  '   <path d="M1076 2239 c-87 -12 -232 -60 -315 -105 -194 -107 -359 -296 -432  '  + 
	 '   -494 -36 -101 -59 -204 -59 -271 0 -42 -13 -75 -91 -230 -49 -100 -89 -188  '  + 
	 '   -87 -196 2 -9 41 -39 88 -67 l85 -51 3 -265 c2 -196 6 -266 15 -272 6 -4 85  '  + 
	 '   -8 175 -8 l162 0 0 -134 c0 -139 5 -155 45 -140 12 5 15 33 15 163 0 109 -4  '  + 
	 '   161 -12 169 -8 8 -62 12 -175 12 l-163 0 -2 257 -3 256 -70 43 c-38 24 -74 45  '  + 
	 '   -80 47 -5 2 27 79 73 171 64 129 82 176 82 209 0 23 5 70 10 105 57 348 317  '  + 
	 '   631 658 718 52 13 114 24 138 24 l44 0 0 -265 0 -264 -38 -10 c-39 -11 -125  '  + 
	 '   -61 -136 -80 -7 -11 -106 32 -106 47 0 4 7 32 15 62 19 69 19 67 -3 79 -29 15  '  + 
	 '   -42 -1 -62 -80 -28 -108 -29 -106 46 -139 50 -23 65 -34 60 -46 -3 -9 -9 -27  '  + 
	 '   -12 -41 -7 -25 -6 -25 -69 -8 -13 4 -41 -8 -82 -34 -69 -45 -76 -53 -67 -74  '  + 
	 '   10 -28 32 -26 88 9 52 33 59 35 91 24 21 -7 35 -18 35 -28 0 -9 14 -41 30 -71  '  + 
	 '   l29 -53 -37 7 c-20 3 -46 9 -58 11 -17 4 -33 -10 -82 -77 -65 -87 -70 -100  '  + 
	 '   -48 -118 20 -17 37 -6 81 55 21 30 45 59 51 65 20 16 143 -15 172 -44 l25 -25  '  + 
	 '   -26 -32 c-90 -107 -5 -270 141 -270 136 0 214 162 132 272 -20 27 -20 31 -6  '  + 
	 '   53 11 17 31 27 73 35 32 6 68 14 79 17 17 4 31 -9 69 -61 52 -70 70 -83 91  '  + 
	 '   -65 22 18 18 27 -43 108 -63 85 -71 92 -93 86 -8 -2 -33 -7 -54 -11 l-39 -7  '  + 
	 '   20 34 c11 19 26 51 32 71 10 29 20 39 47 48 31 11 38 9 91 -24 43 -27 60 -33  '  + 
	 '   70 -25 27 23 13 47 -52 89 -61 40 -66 41 -100 30 -41 -14 -44 -12 -60 34 l-12  '  + 
	 '   34 59 28 c32 15 63 34 69 40 13 16 -23 161 -45 183 -15 14 -18 14 -33 -2 -16  '  + 
	 '   -15 -16 -21 -1 -82 l15 -66 -49 -25 -49 -25 -41 36 c-23 19 -66 43 -95 52  '  + 
	 '   l-53 17 0 264 0 265 68 -6 c150 -12 316 -79 447 -180 143 -110 269 -301 316  '  + 
	 '   -482 30 -114 30 -317 0 -430 -43 -160 -127 -303 -248 -421 l-73 -71 0 -292 c0  '  + 
	 '   -251 2 -292 15 -297 8 -4 22 -1 30 6 13 10 15 56 15 285 l0 272 40 32 c22 17  '  + 
	 '   64 62 94 99 337 418 272 1016 -145 1346 -204 161 -455 229 -723 195z m236  '  + 
	 '   -680 c52 -27 95 -84 109 -146 12 -50 11 -55 -19 -115 -17 -35 -53 -88 -79  '  + 
	 '   -119 -47 -56 -49 -57 -107 -60 l-59 -4 -43 51 c-24 27 -59 77 -79 109 -44 73  '  + 
	 '   -46 120 -9 194 54 108 175 146 286 90z m-52 -514 c40 -21 60 -53 60 -98 0 -51  '  + 
	 '   -52 -107 -99 -107 -96 0 -151 110 -89 177 40 44 80 53 128 28z"/>  '  + 
	 '   <path d="M884 2036 c-243 -114 -418 -334 -463 -580 -27 -149 -5 -348 53 -481  '  + 
	 '   81 -182 249 -346 432 -420 59 -24 94 -21 94 9 0 19 -16 29 -83 56 -147 58  '  + 
	 '   -291 197 -367 355 -143 294 -91 617 135 846 75 76 140 120 240 164 66 29 80  '  + 
	 '   38 80 57 0 35 -39 33 -121 -6z"/>  '  + 
	 '   <path d="M1443 2063 c-7 -2 -13 -13 -13 -23 0 -22 13 -32 70 -54 127 -50 275  '  + 
	 '   -177 348 -301 229 -389 75 -877 -335 -1062 -83 -37 -100 -57 -70 -82 11 -8 29  '  + 
	 '   -5 77 15 457 186 637 741 379 1170 -74 123 -209 243 -340 303 -74 34 -99 41  '  + 
	 '   -116 34z"/>  '  + 
	 '   <path d="M911 1893 c-133 -70 -227 -166 -292 -298 -51 -105 -69 -180 -69 -291  '  + 
	 '   0 -174 62 -333 178 -456 94 -99 265 -199 293 -171 23 23 2 47 -76 86 -109 55  '  + 
	 '   -217 163 -269 267 -87 179 -85 379 6 553 49 94 174 214 271 261 66 31 78 41  '  + 
	 '   75 59 -5 34 -38 32 -117 -10z"/>  '  + 
	 '   <path d="M1401 1916 c-20 -23 -3 -40 81 -79 148 -71 270 -222 313 -386 20 -77  '  + 
	 '   22 -209 5 -282 -43 -185 -176 -345 -352 -423 -59 -25 -70 -43 -43 -66 21 -17  '  + 
	 '   86 8 181 72 148 99 250 256 281 436 50 282 -92 569 -347 701 -85 44 -102 48  '  + 
	 '   -119 27z"/>  ';
	
	var shapes = {
			'fobia' : fobia

	};
	
	ngMdIconService.addShape("fobia", fobia);
	
}])

 
})();
