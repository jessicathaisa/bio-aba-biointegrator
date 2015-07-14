/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module("bioIntegrator").controller("CategoriesController", CategoriesController);

function CategoriesController($scope, $http, $location) {
    $scope.categoryList = [];

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

    $scope.edit = function (id) {
        alert(id);
        if (id >= $scope.categoryList.length)
            $scope.salvarAlteracoes = inclusao;
        else {
            $scope.edition = $scope.categoryList[id];
            $scope.salvarAlteracoes = alteracao;
        }
        $scope.edition = {};
    };


    var alteracao = function () {
        $http.post('www.google.com', $scope.edition).
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
        var category = (
                {id: $scope.categoryList.length + 1,
                    name: $scope.edition.name,
                    description: $scope.edition.description,
                    url: $scope.edition.url
                });
                
        $http.post('www.google.com', category).
                success(function (data, status, headers, config) {
                    $scope.mensagem = "Registro incluído com sucesso.";
                    $scope.categoryList.push(category);
                    $("#myMessage").show().delay(5000).fadeOut();
                }).
                error(function (data, status, headers, config) {
                    $scope.mensagem = "Registro não pode ser incluído";
                    $scope.categoryList.push(category);
                    $("#myMessage").show().delay(5000).fadeOut();
                });
                
        $('#myModal').modal('hide');
    };

}
