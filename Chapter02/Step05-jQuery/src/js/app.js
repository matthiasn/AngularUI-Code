'use strict';
angular.module('myApp', ['myApp.controllers', 'ui.utils'])
    .value('uiJqConfig', {
        tooltip: {
            placement: 'bottom'
        }
    });
