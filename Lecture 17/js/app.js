(function () {
    // This snippet code for resolving problem of undeclared variables
    'use strict'

    var app = angular.module("EntryMainModule", []);

    var shoppingList1 = [
        'Dacia Diesel','Front Lights','Back Lights','Gasoil 2L','Diesel 5L','Wheels x4'
    ];

    var shoppingList2 = [
        {
            name : 'Banana',
            quantity : 12
        },
        {
            name : 'Cookies',
            quantity : 5},
        {
            name : 'Sweets',
            quantity : 50
        },
        {
            name : 'Chocolat',
            quantity : 2
        }
    ];
    app.controller("ShoppingListController",ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope) {
            $scope.shoppingList1 = shoppingList1 ;
            $scope.shoppingList2 = shoppingList2 ;

            $scope.addItem = addItem($scope);
    }
})()

function addItem($scope) {
    return function () {
        var newItem = {
            name: $scope.nameofItem,
            quantity: $scope.quantityofItem
        };

        $scope.shoppingList2.push(newItem);

    };
}
