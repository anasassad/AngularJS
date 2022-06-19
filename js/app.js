(function () {
    // This snippet code for resolving problem of undeclared variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    app.controller("MessageController",MessageController);

    //Register a custom filter
    app.filter('custom',CustomFilter);

    //Inject the instance of scope and filter inside our function called DIController
    // ... to avoid the non-function of our js when we will minify it later
    MessageController.$inject = ['$scope','$filter','customFilter'];

    function MessageController($scope,$filter,CustomFilter) {

        //Using filter to Capitalize the comapanyName
        $scope.companyName = $filter('uppercase')('Avito');

        $scope.yearOfresign = () => "2022";

        $scope.View = CustomFilter('Hydrangeas');

        $scope.switchView = () => {
            $scope.View = 'Chrysanthemum';
        }
    }

    //Our custom filter in Javascript
    function CustomFilter(){
        return function (input){
            if (input == 'Hydrangeas'){
                return input ;
            }
            return input.concat(' SCM') ;
        }
    }


})()