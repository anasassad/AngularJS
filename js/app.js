(function () {
    // This snippet code for resolving problem of undeclared variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    app.controller("MessageController",MessageController);

    //Inject the instance of scope and filter inside our function called DIController
    // ... to avoid the non-function of our js when we will minify it later
    MessageController.$inject = ['$scope'];

    function MessageController($scope) {

        $scope.companyName = "Avito";
        $scope.yearOfresign = () => "2022";
    }
})()