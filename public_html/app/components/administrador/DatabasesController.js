/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("bioIntegrator").controller("DatabasesController", DatabasesController);

function DatabasesController($scope, $http, $location, LoginService) {
    $scope.databaseList = [];
    
    if(LoginService.getLogin() === undefined || LoginService.getLogin() === ""){
	    $location.path("/administrador/login");
    	 return;
    }

    $scope.salvarAlteracoes;

	 $scope.deletar = function (id) {
			$scope.edition = $scope.databaseList[id];
	 	
        $http.delete('http://localhost:9966/taskmanager-web/rest/biodatabase/' + $scope.edition.id).
                success(function (data, status, headers, config) {
                    $scope.mensagem = "Deleção realizada com sucesso.";
                    $scope.databaseList.splice(id, 1);
                    $("#myMessage").show().delay(5000).fadeOut();
                }).
                error(function (data, status, headers, config) {
                    $scope.mensagem = "A deleção não pode ser salvas.";
                    $("#myMessage").show().delay(5000).fadeOut();
                });
	 };

    $http.get('http://localhost:9966/taskmanager-web/rest/biodatabase').
            success(function (data) {
                $scope.databaseList = data;
            });

    $scope.edit = function (id) {
        $scope.edition = {};
        $scope.messageAlter = "";
        if (id == null)
            $scope.salvarAlteracoes = inclusao;
        else {
            $scope.edition = $scope.databaseList[id];
            $scope.salvarAlteracoes = alteracao;
        }
    };


    var alteracao = function () {
        if (!$scope.formulario.$valid) {
            $scope.messageAlter = "Favor preencher os campos corretamente.";
            return false;
        }
        
        var database = (
                {id: $scope.edition.id,
                    name: $scope.edition.name,
                    description: $scope.edition.description,
                    url: $scope.edition.url,
                    format: $scope.edition.format
                });
        
        $http.put('http://localhost:9966/taskmanager-web/rest/biodatabase', database).
                success(function (data, status, headers, config) {
                    $scope.mensagem = "Alterações salvas com sucesso.";
                    $("#myMessage").show().delay(5000).fadeOut();
                }).
                error(function (data, status, headers, config) {
                    $scope.mensagem = "As alterações não puderam ser salvas.";
                    $("#myMessage").show().delay(5000).fadeOut();
                });

        $('#myModal').modal('hide');
    };

    var inclusao = function () {
        if (!$scope.formulario.$valid) {
            $scope.messageAlter = "Favor preencher os campos corretamente.";
            return false;
        }
        
        
        var database = (
                {   name: $scope.edition.name,
                    description: $scope.edition.description,
                    url: $scope.edition.url,
                    format: $scope.edition.format
                });
                
        $http.post('http://localhost:9966/taskmanager-web/rest/biodatabase', database).
                success(function (data, status, headers, config) {
                    $scope.mensagem = "Registro incluído com sucesso.";
                    $scope.databaseList.push($scope.edition);
                    $("#myMessage").show().delay(5000).fadeOut();
                }).
                error(function (data, status, headers, config) {
                    $scope.mensagem = "Registro não pode ser incluído";
                    $("#myMessage").show().delay(5000).fadeOut();
                });
                
        $('#myModal').modal('hide');
    };

}
