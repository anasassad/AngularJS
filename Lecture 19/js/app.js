(function () {

    'use strict'

    angular.module("EntryMainModule", [])
    .controller("ParentController1",ParentController1)
    .controller("ChildController1",ChildController1)
    .controller("ParentController2",ParentController2)
    .controller("ChildController2",ChildController2);

    ParentController1.$inject = ['$scope'];

    function ParentController1($scope){
        $scope.name = "Anas";
        $scope.obj = this ;
        $scope.obj.name = "Anas";
    }

    ChildController1.$inject = ['$scope'];

    function ChildController1($scope){
        $scope.name = "Ahmed";
        console.log($scope);
        console.log("Child name",$scope.name);
        $scope.obj.name = "Soolking";
    }
    function ParentController2(){
        var parent = this ;
        parent.name = "Luis";
    }

    ChildController2.$inject = ['$scope'];

    function ChildController2($scope){
        var child = this ;
        child.name ="Antonio";
        console.log($scope);
    }


})()
