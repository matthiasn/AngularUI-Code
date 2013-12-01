'use strict';
angular.module('myApp.controllers', []).controller('NgGridCtrl',
    ['$scope', 'dataService', function ($scope, dataService) {
        $scope.data = dataService.data;
        $scope.gridOptions = {
            data: 'data',
            columnDefs: [
                {field: 'lang', displayName: 'Language'},
                {field: 'year', displayName: 'Year'},
                {field: 'decade', displayName: 'Decade'}
            ]
        };
    }]);
