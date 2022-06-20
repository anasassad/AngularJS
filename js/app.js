(function () {
    // This snippet code for resolving problem of undeclared variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    app.controller("MainController",MainController);

    //Inject the instance of scope and filter inside our function called DIController
    // ... to avoid the non-function of our js when we will minify it later
    MainController.$inject = ['$scope'];

    function MainController($scope) {

    }

})()