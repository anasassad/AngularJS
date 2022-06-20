(function () {
    // This snippet code for resolving problem of undeclared variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    app.controller("CounterController",CounterController);

    //Inject the instance of scope and filter inside our function called DIController
    // ... to avoid the non-function of our js when we will minify it later
    CounterController.$inject = ['$scope','$timeout'];

    function CounterController($scope,$timeout) {

            $scope.counter = 0 ; 

            $scope.increaseByOne = function () {
                    //Solution 3 is about declaring a service called $timeout that is comes with Angular JS
                    $timeout(function () {
    
                        $scope.counter++;
    
                    },500);
                };

            // $scope.increaseByOne = function () {
            //         setTimeout(function () {
                                    
            //          //The function $apply have its own $digest in the hoods so this approach is better than the one below
            //          $scope.$apply(function(){
            //              $scope.counter++;
            //          });
            //         },500);
            // };

            // //First solution to make sure the prop counter is incremented
            // $scope.increaseByOne = function () {
            //     setTimeout(function () {

            //         $scope.counter++;
            //         $scope.$digest();

            //     },500);
            // }

    }

})()