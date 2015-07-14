/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('bioIntegrator').controller('RunningTask', RunningTask);

function RunningTask($scope, $http, $localStorage, $timeout) {
    $scope.lastTaskKey = $localStorage.message;
    $scope.count = 0;

    var poll = function () {
        $scope.count++;
		findTask($scope.lastTaskKey)
			.then(function(response){
				$scope.task = response.data;
				if($scope.task && $scope.task.status) {
					retrieveResult($scope.lastTaskKey);
				} else {
			        $timeout(function () {
						poll() 
					}, 2000);;
				}
			});
    };
    poll();

	function retrieveResult(taskId) {
		return $http.get('http://localhost:9966/taskmanager-web/rest/biotaskresult/' + taskId)
			.then(function(response) {
				$scope.task.result = (response.data.result || "No result" );
			});
	}	

	function findTask(taskId) {
		return $http.get('http://localhost:9966/taskmanager-web/rest/biotask/' + taskId);
	}
};
