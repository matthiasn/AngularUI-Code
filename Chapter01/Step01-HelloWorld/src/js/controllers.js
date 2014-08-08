'use strict';

/** Controllers */
angular.module('myApp.controllers', []).
    controller('helloWorldCtrl',function ($scope) {
        $scope.name = "World";
    });