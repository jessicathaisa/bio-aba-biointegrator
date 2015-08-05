/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('bioIntegrator').controller('LoggedController', LoggedController);


function LoggedController($scope, LoginService)
{
    $scope.user = LoginService.getLogin();
    $scope.logout = function(){
        
	 $http.delete('http://localhost:9966/taskmanager-web/rest/user').
      success(function (data, status, headers, config) {
        $location.path("/administrador/login");
        LoginService.setLogin("");
        $scope.user = "";
      });
    };
    
    $scope.isLogged = function(){
      return LoginService.getLogin();  
    };
};
