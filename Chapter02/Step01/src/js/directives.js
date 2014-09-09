'use strict';
angular.module('myApp.directives', [])
.directive('helloWorld', function () {
    return {
        restrict: 'AE',
        scope: { name: "=name" },
        template: 	"<div>Hello {{ name.first }} {{ name.last }}!</div>" +
					"<input ng-model='name.first'></input>" + 
					"<input ng-model='name.last'></input>"
        }
    });