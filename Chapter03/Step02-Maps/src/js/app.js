'use strict';

function onGoogleReady() {
    angular.bootstrap(document.getElementById("myApp"), ['myApp']);
}

angular.module('myApp', ['myApp.controllers', 'ui.map']);
