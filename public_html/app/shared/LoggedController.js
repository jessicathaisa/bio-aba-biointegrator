/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('bioIntegrator').controller('LoggedController', LoggedController);


function LoggedController($scope, $location)
{
    $scope.user = "";
    $scope.logout = function(){
        $scope.user = "";
    };
    
    $scope.$on('someEvent', function(event, args) {
        console.log('recebeu evento.');
        $scope.user = args.username;
    });
};
