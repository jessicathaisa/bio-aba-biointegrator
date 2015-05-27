var app = angular.module('bioIntegrator', ['controllers', 'ngTranslate']);
var controllers = angular.module('controllers', []);

controllers.controller('RunningTask', RunningTask);
controllers.controller('BioTask', BioTask);
controllers.controller('SwitchLanguageController', SwitchLanguageController);
controllers.controller('HeaderController', HeaderController);

function RunningTask($scope, $cookieStore) {
    $scope.lastTaskKey = $cookieStore.get('LAST_TASKKEY');
}
;

function BioTask($scope, $http, $cookieStore) {
    $scope.loadingDatabase = false;
    $scope.loadingAlgorithm = false;
    $http.get('http://localhost:8080/taskmanager-web/rest/biodatabase').
            success(function (data) {
                $scope.biodatabases = data;
                $scope.selectedDB = "";
                $scope.loadingDatabase = true;
            });
    $http.get('http://localhost:8080/taskmanager-web/rest/bioalgorithm').
            success(function (data) {
                $scope.bioalgorithms = data;
                $scope.selectedAlg = "";
                $scope.loadingAlgorithm = true;
            });
    $scope.submit = function () {
        $http.post('http://localhost:8080/taskmanager-web/rest/biotask', {database: $scope.selectedDB, algorithm: $scope.selectedAlg}).
                success(function (data) {
                    $scope.task = data;
                    $cookieStore.put('LAST_TASKKEY', $scope.task.taskKey);
                    alert($scope.task.taskKey);
                });
    };
}
;

function SwitchLanguageController($translate, $scope) {
    $scope.toggleLang = function () {
        $translate.uses() === 'en_EN' ? $translate.uses('pt_BR') : $translate.uses('en_EN');
    };
}
;

function HeaderController($scope, $location)
{
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}
;

// Configuring $translateProvider
app.config(['$translateProvider', function ($translateProvider) {

        // Simply register translation table as object hash
        $translateProvider.translations('en_EN', {
            'TITLE': 'Bio-ABA - The new Integrator between Applications, Biological databases and algorithms',
            'SIMPLE_TITLE': 'Bio-ABA',
            'SIMPLE_SUBTITLE': 'The new Integrator between Applications, Biological databases and algorithms.',
            'HOME': 'Home',
            'HELP': 'Help',
            'CONTACT': 'Contact Us',
            'DATABASETITLE_LABEL': 'Choose a database to use:',
            'DATABASETITLE_SELECT': '-- Choose the database --',
            'DATABASENAME_LABEL': 'Name',
            'DATABASEDESCRIPTION_LABEL': 'Description',
            'DATABASEFORMAT_LABEL': 'Format',
            'ALGORITHMTITLE_LABEL': 'Choose an algorithm to execute:',
            'ALGORITHMTITLE_SELECT': '-- Choose the algorithm --',
            'ALGORITHMNAME_LABEL': 'Name',
            'ALGORITHMDESCRIPTION_LABEL': 'Description',
            'ALGORITHMPROVIDER_LABEL': 'Provider',
            'ALGORITHMPROVIDER_NULL' : "Not informed provider",
            
            
            'SENT_TASK' : "Sent Task"
        });
        // Simply register translation table as object hash
        $translateProvider.translations('pt_BR', {
            'TITLE': 'Bio-ABA - Um novo integrador entre Aplicações, bancos de dados e algoritmos da biologia molecular',
            'SIMPLE_TITLE': 'Bio-ABA',
            'SIMPLE_SUBTITLE': 'Um novo integrador entre Aplicações, bancos de dados e algoritmos da biologia molecular.',
            'HOME': 'Página Inicial',
            'HELP': 'Ajuda',
            'CONTACT': 'Contate-nos',
            'DATABASETITLE_LABEL': 'Escolha um banco de dados:',
            'DATABASETITLE_SELECT': '-- Escolha o banco de dados --',
            'DATABASENAME_LABEL': 'Nome',
            'DATABASEDESCRIPTION_LABEL': 'Descrição',
            'DATABASEFORMAT_LABEL': 'Formato',
            'ALGORITHMTITLE_LABEL': 'Escolha um algoritmo:',
            'ALGORITHMTITLE_SELECT': '-- Escolha o algoritmo --',
            'ALGORITHMNAME_LABEL': 'Nome',
            'ALGORITHMDESCRIPTION_LABEL': 'Descrição',
            'ALGORITHMPROVIDER_LABEL': 'Provedor',
            'ALGORITHMPROVIDER_NULL' : "Provedor não informado",
            
            
            'SENT_TASK' : "Enviar Tarefa"
        });

        $translateProvider.uses('en_EN');
        $translateProvider.rememberLanguage(true);

    }]);