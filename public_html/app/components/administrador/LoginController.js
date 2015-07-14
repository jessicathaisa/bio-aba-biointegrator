/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module("bioIntegrator").controller("LoginController", LoginController);

function LoginController($scope, $http, $location) {
    $scope.email = "";
    $scope.senha = "";

    $scope.submit = function () {
        $http.post('www.google.com', {'email': $scope.email, 'senha': $scope.senha}).
                success(function (data, status, headers, config) {
                    $location.path("/administrador/home");
                }).
                error(function (data, status, headers, config) {
                    $scope.mensagem = "Login e/ou senha inválido(s)."
                    $location.path("/administrador/home");
                });
        $scope.$emit('someEvent', {username: $scope.email});
        console.log('enviou evento.');
    };
}