describe('<habito-list> habitoListCtrl', function() {

	beforeEach(module('adm'));
	beforeEach(module('adm.templates'));

	var URL_LISTA_OBJETOS = /habitosubmit/;
	var URL_GET_BY_ID= /habitosubmit\/get/;

	var configMock = {
			confs: {
				maxItensPerPage: 15
			}
	};

	var submitedHabitsInToday = [
		{id: 1, habito:{id: 1, _string:{titulo:"Fazer caminhada "} ,submitedDate: "2018-06-09"}},
		{id: 2, habito:{id: 2, _string:{titulo:"Meditar"} ,submitedDate: "2018-06-09"}},
		];
	
	var habitos = [
		{id: 1, _string:{titulo:"Fazer caminhada "} ,submitedDate: "2018-06-09"},
		{id: 2, _string:{titulo:"Meditar"} ,submitedDate: "2018-06-09"},
		{id: 3, _string:{titulo:"Oração"} ,submitedDate: "2018-06-09"},
		{id: 4, _string:{titulo:"Não comer arroz"} ,submitedDate: "2018-06-09"},
		];

	var scope, $controller, $compile, $rootScope, $httpBackend, element, $templateCache;

	beforeEach(inject(function(_$httpBackend_, _$rootScope_, _$controller_, _$compile_, _$templateCache_){

		$rootScope  = _$rootScope_;
		$templateCache = _$templateCache_;
		$compile = _$compile_;
		$httpBackend = _$httpBackend_;
		$controller =  _$controller_;

	}));

	afterEach(function() {
		scope && scope.$destroy();
	});

	function compile(template, scope) {

		inject(function($compile) {
			element = $compile(template)(scope);
			scope.$apply();
		});

		return element;
	}


	function createScope(objeto, scopeData){

		inject(function(_$rootScope_){

			scope = _$rootScope_.$new();
		});   


		angular.forEach(scopeData, function(value, key) {
			scope[key] = value;

		});

		return scope;

	}



	describe("Funcionamento básico", function(){

		it("A lista de objetos deve ser exibida corretamente no template ", function(){
			

			$httpBackend.expectGET(/habitosubmit/).respond({itens: submitedHabitsInToday});
			$httpBackend.expectGET(/habito/).respond({itens: habitos});
			scope = createScope();
			var template = "<habitosubmit-list></habitosubmit-list>"	;	
			var listElement = compile(template, scope);
			var ctrl = listElement.controller("habitosubmitList");
			$httpBackend.flush();
			ctrl.scope.$apply();
			for(var i in habitos){
				expect( listElement.html() ).toContain(habitos[i]._string.titulo); 
			}
		
			
		})
		
		it("Os habitos que foram confirmados no dia devem estar com o checkbox checado ", function(){

			var submitedHabits = [
				{id: 1, habito:{id: 1, _string:{titulo:"Fazer caminhada "} ,submitedDate: "2018-06-09"}},
				{id: 2, habito:{id: 2, _string:{titulo:"Meditar"} ,submitedDate: "2018-06-09"}}
				];
			$httpBackend.expectGET(/habitosubmit/).respond({itens: submitedHabits});
			$httpBackend.expectGET(/habito/).respond({itens: habitos});
			scope = createScope();
			var template = "<habitosubmit-list></habitosubmit-list>"	;	
			var listElement = compile(template, scope);
			var ctrl = listElement.controller("habitosubmitList");
			$httpBackend.flush();
			ctrl.scope.$apply();
			var firstHabit = listElement.find("#merged-habits-index-0");
			var checkboxElement =firstHabit.find(".submitedInToday");
			expect(checkboxElement.attr("class")).toContain("md-checked");
		
			
		})

	});
	
	describe("Alteração de status de um hábito", function(){
		
		it("Se um hábito já estiver checado para o dia e o novo status de check for 'false' o HabitoSubmit correspondente deve ser deletado", function(){
			
			var submitedHabits = [
				{id: 1, habito:{id: 1, _string:{titulo:"Fazer caminhada "} ,submitedDate: "2018-06-09"}},
				{id: 2, habito:{id: 2, _string:{titulo:"Meditar"} ,submitedDate: "2018-06-09"}}
				];
			
			var habitos = [
				{id: 1, _string:{titulo:"Fazer caminhada "} ,submitedDate: "2018-06-09"},
				{id: 2, _string:{titulo:"Meditar"} ,submitedDate: "2018-06-09"},
				{id: 3, _string:{titulo:"Oração"} ,submitedDate: "2018-06-09"},
				{id: 4, _string:{titulo:"Não comer arroz"} ,submitedDate: "2018-06-09"},
				];
			
			$httpBackend.expectGET(/habitosubmit/).respond({itens: submitedHabits});
			$httpBackend.expectGET(/habito/).respond({itens: habitos});
			scope = createScope();
			var template = "<habitosubmit-list></habitosubmit-list>"	;	
			var listElement = compile(template, scope);
			var ctrl = listElement.controller("habitosubmitList");
			$httpBackend.flush();
			ctrl.scope.$apply();
			var firstHabit = listElement.find("#merged-habits-index-2");
			var checkboxElement =firstHabit.find(".submitedInToday");
			$httpBackend.expectPOST(/habitosubmit\/add/).respond({});
			checkboxElement.click();
			$httpBackend.flush();
			ctrl.scope.$apply();
			
		});
		
	it("Se um hábito já estiver checado para o dia e o novo status de check for 'true' o HabitoSubmit deve ser salvo", function(){
			
			var submitedHabits = [
				{id: 1, habito:{id: 1, _string:{titulo:"Fazer caminhada "} ,submitedDate: "2018-06-09"}},
				{id: 2, habito:{id: 2, _string:{titulo:"Meditar"} ,submitedDate: "2018-06-09"}}
				];
			$httpBackend.expectGET(/habitosubmit/).respond({itens: submitedHabits});
			$httpBackend.expectGET(/habito/).respond({itens: habitos});
			scope = createScope();
			var template = "<habitosubmit-list></habitosubmit-list>"	;	
			var listElement = compile(template, scope);
			var ctrl = listElement.controller("habitosubmitList");
			$httpBackend.flush();
			ctrl.scope.$apply();
			var firstHabit = listElement.find("#merged-habits-index-0");
			var checkboxElement =firstHabit.find(".submitedInToday");
			$httpBackend.expectPOST(/habitosubmit\/delete/).respond({});
			checkboxElement.click();
			$httpBackend.flush();
			ctrl.scope.$apply();
			
		});
		
	});


});