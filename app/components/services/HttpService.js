supervisorApp.factory('HttpService', ['$http', 'Constants', function ($http, Constants) {

    return {
        getWorkers: function () {
            return $http({
                url: Constants.getWorkers,
                method: "GET",
                headers: {'Content-type': 'application/json'}
            });
        },
        assignWorker: function (qParams) {
            return $http({
                url: Constants.assignWorker + "?id=" + qParams.id,
                method: "POST",
                headers: {'Content-type': 'application/json'},
                data: qParams
            });
        }
    };
}]);
