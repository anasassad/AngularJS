(function () {
    // This snippet code for resolving problem of undeclared variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    app.controller("BindingController",BindingController);

    //Inject the instance of scope and filter inside our function called DIController
    // ... to avoid the non-function of our js when we will minify it later
    BindingController.$inject = ['$scope'];

    function BindingController($scope) {

        $scope.showNumberOfWatchers = function(){
            console.log("Watchers ",$scope.$$watchersCount);
        }

        $scope.LogFirstName = function(){
            console.log("First Name : ",$scope.firstname);
        }

        $scope.LogFullName = function(){
            console.log("Full Name : ",$scope.fullname);
        }

        $scope.setFullName = function(){
            $scope.fullname = $scope.firstname + " " + "ASSAD";
        }
    }

})()