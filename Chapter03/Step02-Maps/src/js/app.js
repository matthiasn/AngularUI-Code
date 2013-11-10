'use strict';

function onGoogleReady() {
    angular.bootstrap(document.getElementById("myApp"), ['myApp']);
}

angular.module('myApp', ['myApp.controllers', 'myApp.directives', 'ui.map'])
    .value('uiJqConfig', {
        tooltip: {
            placement: 'bottom'
        }
    });
