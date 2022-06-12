(function () {
    // This snippet code for resolving problem of scoping variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    app.controller("DIController",DIController);

    //Inject the instance of scope and filter inside our function called DIController
    // ... to avoid the non-function of our js when we will minify it later
    DIController.$inject = ['$scope','$filter'];

    function DIController($scope,$filter) {

        $scope.name = "Ahmed";
        $scope.upperCase = function(){
            var upper = $filter('uppercase');
            $scope.name = upper($scope.name);
        }
    }
})()

// Minified Code
//(function(){var app=angular.module("EntryMainModule",[]);app.controller("DIController",DIController);DIController.$inject=['$scope','$filter'];function DIController($scope,$filter){$scope.name="Ahmed";$scope.upperCase=function(){var upper=$filter('uppercase');$scope.name=upper($scope.name)}}})()