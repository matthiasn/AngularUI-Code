'use strict';
angular.module('myApp.controllers', []).controller('helloWorldCtrl', function ($scope) {
    $scope.name = {
        first: "Jane",
        last: "Doe"
    };
    $scope.mask = "(999) 999-9999 ext 99";
    $scope.getModel = function () {
        return JSON.stringify($scope.name, undefined, 2);
    };
});
