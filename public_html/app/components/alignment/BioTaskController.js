/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('bioIntegrator').controller('BioTask', BioTask);

function BioTask($scope, $location, $http, $localStorage) {
    $scope.loadingDatabase = false;
    $scope.loadingAlgorithm = false;
    $scope.taskParameters = [];

    $http.get('http://localhost:9966/taskmanager-web/rest/biodatabase').
            success(function (data) {
                $scope.biodatabases = data;
                $scope.selectedDB = "";
                $scope.loadingDatabase = true;
            });
    $http.get('http://localhost:9966/taskmanager-web/rest/bioalgorithm').
            success(function (data) {
                $scope.bioalgorithms = data;
                $scope.selectedAlg = "";
                $scope.loadingAlgorithm = true;
            });
    $scope.selectedAlgorithmChanged = function () {
        $scope.taskParameters = [];
        if ($scope.selectedAlg !== "") {
            for (var index in $scope.selectedAlg.parameters) {
                $scope.taskParameters.push({
                    'algorithmParameter': $scope.selectedAlg.parameters[index],
                    'parameterValue': ''
                });
            }
        }
    };
    $scope.$on("fileSelected", function (event, args) {
        $scope.$apply(function () {
            //add the file object to the scope's files collection
            $scope.file = args.file;
        });
    });
    $scope.submit = function () {
        document.getElementById("btnSubmit").disabled = true;
        var formData = new FormData();
        formData.append('task', new Blob([JSON.stringify({
                database: $scope.selectedDB,
                algorithm: $scope.selectedAlg,
                parameters: $scope.taskParameters
            })], {type: "application/json"}));

        if ($scope.file !== undefined && $scope.file !== null && $scope.file !== "")
            formData.append('file', $scope.file);
        else
            formData.append('query', new Blob([JSON.stringify({
                    query: $scope.query
                })], {type: "application/json"}));

        $http.post("http://localhost:9966/taskmanager-web/rest/biotask", formData, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        }).success(function (data) {
            $scope.task = data;
            $localStorage.message = $scope.task.taskKey;
            alert($scope.task.taskKey);
            $location.absUrl($location.host() + '/executingAlgorithm.html');
        }).error(function () {
            $('#modalSubmitError').modal('show');
        });
    };
}
;