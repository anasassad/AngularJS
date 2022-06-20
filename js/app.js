(function () {
    // This snippet code for resolving problem of undeclared variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    app.controller("MainController",MainController);

    //Inject the instance of scope and filter inside our function called DIController
    // ... to avoid the non-function of our js when we will minify it later
    MainController.$inject = ['$scope'];

    function MainController($scope) {
            $scope.counter = 0 ;

            $scope.increaseByOne = function () {
                $scope.counter++;
            }

            $scope.$watch(function(){
                console.log("Digest Notification for watchers");
            });

            // $scope.$watch('counter',function(newValue , oldValue){
            //     console.log("oldValue",oldValue);
            //     console.log("newValue",newValue);
            // })
    }

})()