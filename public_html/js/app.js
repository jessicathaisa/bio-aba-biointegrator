

var app = angular.module('bioIntegrator', ['controllers','ngTranslate']);
var controllers = angular.module('controllers', []);

controllers.controller('Hello', Hello);
controllers.controller('SwitchLanguageController', SwitchLanguageController);
controllers.controller('HeaderController', HeaderController);

function Hello($scope, $http) {
    $http.get('http://localhost:8080/taskmanager-web/rest/biodatabase').
            success(function (data) {
                $scope.biodatabases = data;
                $scope.selectedDB = "";
            });
};

function SwitchLanguageController ($translate, $scope) {
    $scope.toggleLang = function () {
        $translate.uses() === 'en_EN'? $translate.uses('pt_BR') : $translate.uses('en_EN');
    };
};

function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
};

// Configuring $translateProvider
app.config(['$translateProvider', function ($translateProvider) {
    
    // Simply register translation table as object hash
    $translateProvider.translations('en_EN', {
        'TITLE': 'Bio-ABA - The new Integrator between Applications, Biological databases and algorithms',
        'SIMPLE_TITLE': 'Bio-ABA',
        'SIMPLE_SUBTITLE': 'The new Integrator between Applications, Biological databases and algorithms.',
        'HOME': 'Home',
        'HELP': 'Help',
        'CONTACT': 'Contact Us'
    });  
    // Simply register translation table as object hash
    $translateProvider.translations('pt_BR', {
        'TITLE': 'Bio-ABA - Um novo integrador entre Aplicações, bancos de dados e algoritmos da biologia molecular',
        'SIMPLE_TITLE': 'Bio-ABA',
        'SIMPLE_SUBTITLE': 'Um novo integrador entre Aplicações, bancos de dados e algoritmos da biologia molecular.',
        'HOME': 'Página Inicial',
        'HELP': 'Ajuda',
        'CONTACT': 'Contate-nos'
    });   
    
    $translateProvider.uses('en_EN');
    $translateProvider.rememberLanguage(true);
    
}]);