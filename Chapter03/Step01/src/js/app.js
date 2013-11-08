'use strict';
angular.module('myApp', ['myApp.controllers', 'myApp.directives', 'ui.utils'])
    .value('uiJqConfig', {
        tooltip: {
            placement: 'bottom'
        }
    });
