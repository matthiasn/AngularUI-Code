'use strict';
angular.module('myApp.controllers', []).controller('NgGridCtrl',
    ['$scope', 'dataService', function ($scope, dataService) {
        $scope.data = dataService.data;
        $scope.gridOptions = {
            data: 'data',
            columnDefs: [
                {field: 'lang', displayName: 'Language', width: "45%"},
                {field: 'year', displayName: 'Year', width: "25%"},
                {field: 'decade', displayName: 'Decade', width: "30%"}
            ],
            showGroupPanel: true,
            jqueryUIDraggable: true
        };
    }]);
