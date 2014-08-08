'use strict';
angular.module('myApp.directives', [])
.directive('helloWorld', function () {
    return {
        restrict: 'AE',
        scope: { name: "=name" },
        template: "<div class='header'>Hello {{ name.first }} {{ name.last }}!</div>" +
                  "<input class='fname' data-ng-model='name.first'></input>" +
                  "<input class='lname'' data-ng-model='name.last'></input>"
        }
    });