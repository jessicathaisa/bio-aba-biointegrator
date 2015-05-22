function Hello($scope, $http) {
    $http.get('http://localhost:8080/taskmanager-web/rest/biodatabase').
        success(function(data) {
            $scope.biodatabases = data;
        });
}