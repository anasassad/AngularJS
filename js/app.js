(function () {
    // This snippet code for resolving problem of scoping variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    app.controller("DIController",DIController);

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