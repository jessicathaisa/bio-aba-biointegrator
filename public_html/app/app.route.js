/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('bioIntegrator')
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                        when('/home', {templateUrl: 'app/components/homePage/homePage.html', controller: ''}).
                        when('/help', {templateUrl: 'app/components/help/help.html', controller: ''}).
                        when('/contact', {templateUrl: 'app/components/contact/contact.html', controller: ''}).
                        when('/administrador/login', {templateUrl: 'app/components/administrador/login.html', controller: ''}).
                        when('/administrador/home', {templateUrl: 'app/components/administrador/homePage.html', controller: ''}).
                        when('/administrador/categories', {templateUrl: 'app/components/administrador/categories.html', controller: ''}).
                        when('/administrador/algorithms', {templateUrl: 'app/components/administrador/algorithms.html', controller: ''}).
                        otherwise({redirectTo: '/home'});
            }]);