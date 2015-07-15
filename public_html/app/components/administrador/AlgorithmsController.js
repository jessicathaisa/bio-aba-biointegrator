/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("bioIntegrator").controller("AlgorithmsController", AlgorithmsController);

function AlgorithmsController($scope, $http, $location) {
    $scope.categoryList = [];
    $scope.algorithmList = [];

    $scope.salvarAlteracoes;

    $scope.categoryList[0] = {
        id: "1",
        name: "Aligment Algorithms",
        description: "Algoritmos que fazem alinhamento de sequências de nucleotídeos e proteínas",
        url: "/categories/alignment"
    };
    $scope.categoryList[1] = {
        id: "2",
        name: "Data Base Format Change",
        description: "Algoritmos que permitem mudar os formatos dos banco de dados",
        url: "/categories/changeFormat"
    };
    $scope.categoryList[2] = {
        id: "3",
        name: "DoubleCheck For Smilarities",
        description: "Algoritmos que permitem mudar os formatos dos banco de dadosAlgoritmos que fazem uma busca dupla de similaridades entre sequências",
        url: "/categories/doubleCheck"
    };
    $scope.algorithmList[0] = {
        id: "1",
        name: "blastx",
        description: "BlastX-Diamond",
        provider: "Diamond",
        url: "http://localhost:8080/bioalgorithmpoc-web/rest",
        allowedFormats: "faa, fna, dbnma",
        category: $scope.categoryList[1]
    };
    $scope.algorithmList[1] = {
        id: "2",
        name: "blastp",
        description: "BlastP-Diamond",
        provider: "Diamond",
        url: "http://localhost:8080/bioalgorithmpoc-web/rest",
        allowedFormats: "fna, dbnma",
        category: $scope.categoryList[2]
    };
    $scope.algorithmList[2] = {
        id: "3",
        name: "blastxP",
        description: "BlastXP - Corretora",
        provider: "Corretora",
        url: "http://localhost:8080/bioalgorithmpoc-web/rest",
        allowedFormats: "faa, fna",
        category: $scope.categoryList[0]
    };

    $scope.edit = function (id) {
        $scope.edition = {};
        $scope.messageAlter = "";
        if (id >= $scope.algorithmList.length)
            $scope.salvarAlteracoes = inclusao;
        else {
            $scope.edition = $scope.algorithmList[id];
            $scope.salvarAlteracoes = alteracao;
        }
    };


    var alteracao = function () {
        if (!$scope.formulario.$valid) {
            $scope.messageAlter = "Favor preencher os campos corretamente.";
            return false;
        }
        
        var auxFormats = $scope.edition.allowedFormats.split(",");
        
        var algorithm = (
                {id: $scope.algorithmList.length + 1,
                    name: $scope.edition.name,
                    description: $scope.edition.description,
                    provider: $scope.edition.provider,
                    url: $scope.edition.url,
                    classification: $scope.edition.category,
                    allowedFormats: auxFormats
                });
        
        $http.post('www.google.com', algorithm).
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
        
        var auxFormats = $scope.edition.allowedFormats.split(",");
        
        var algorithm = (
                {id: $scope.algorithmList.length + 1,
                    name: $scope.edition.name,
                    description: $scope.edition.description,
                    provider: $scope.edition.provider,
                    url: $scope.edition.url,
                    classification: $scope.edition.category,
                    allowedFormats: auxFormats
                });
                
        $http.post('www.google.com', algorithm).
                success(function (data, status, headers, config) {
                    $scope.mensagem = "Registro incluído com sucesso.";
                    $scope.algorithmList.push(algorithm);
                    $("#myMessage").show().delay(5000).fadeOut();
                }).
                error(function (data, status, headers, config) {
                    $scope.mensagem = "Registro não pode ser incluído";
                    $scope.categoryList.push(algorithm);
                    $("#myMessage").show().delay(5000).fadeOut();
                });
                
        $('#myModal').modal('hide');
    };

}
