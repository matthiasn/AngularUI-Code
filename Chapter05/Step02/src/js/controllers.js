'use strict';
angular.module('myApp.controllers', ['myApp.filters'])
    .controller('NgAnimateCtrl', ['$scope', function ($scope) {
        $scope.items = [
            { text: "call mum", completed: false },
            { text: "do laundry", completed: false }
        ];

        $scope.inputText = "";
        $scope.addItem = function () {
            $scope.items.push({
                text: $scope.inputText,
                completed: false
            });
            $scope.inputText = ""
        };
    }]);
