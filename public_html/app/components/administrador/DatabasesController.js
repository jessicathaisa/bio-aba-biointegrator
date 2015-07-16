/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("bioIntegrator").controller("DatabasesController", DatabasesController);

function DatabasesController($scope, $http, $location) {
    $scope.databaseList = [];

    $scope.salvarAlteracoes;

    $scope.databaseList[0] = {
        id: "1",
        name: "protein_refseq",
        description: "Base de Dados de proteínas",
        url: "www.google.com",
        format: "faa"
    };
    $scope.databaseList[1] = {
        id: "2",
        name: "human_been_refseq",
        description: "Base de Dados de proteínas de Seres Humanos",
        url: "www.google.com",
        format: "faa"
    };
    $scope.databaseList[2] = {
        id: "3",
        name: "human_been_nucleotydes",
        description: "Base de Dados de DNA de Seres Humanos",
        url: "www.uol.com",
        format: "fna"
    };
    $scope.databaseList[3] = {
        id: "4",
        name: "mouse.1.protein.faa",
        description: "Base de Dados de proteínas de Ratos",
        url: "www.yahoo.com",
        format: "faa"
    };

    $scope.edit = function (id) {
        $scope.edition = {};
        $scope.messageAlter = "";
        if (id >= $scope.databaseList.length)
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
                {id: $scope.databaseList.length + 1,
                    name: $scope.edition.name,
                    description: $scope.edition.description,
                    url: $scope.edition.url,
                    format: $scope.edition.format
                });
        
        $http.post('www.google.com', database).
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
                {id: $scope.databaseList.length + 1,
                    name: $scope.edition.name,
                    description: $scope.edition.description,
                    url: $scope.edition.url,
                    format: $scope.edition.format
                });
                
        $http.post('www.google.com', database).
                success(function (data, status, headers, config) {
                    $scope.mensagem = "Registro incluído com sucesso.";
                    $scope.databaseList.push($scope.edition);
                    $("#myMessage").show().delay(5000).fadeOut();
                }).
                error(function (data, status, headers, config) {
                    $scope.mensagem = "Registro não pode ser incluído";
                    $scope.databaseList.push($scope.edition);
                    $("#myMessage").show().delay(5000).fadeOut();
                });
                
        $('#myModal').modal('hide');
    };

}
