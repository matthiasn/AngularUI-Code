'use strict';

angular.module('myApp', ['ui.bootstrap', 'ngRoute', 'myApp.controllers']).config(function($routeProvider) {  
  $routeProvider.when('/issue/:issue', {templateUrl: 'views/view-issue.tpl.html'});
	$routeProvider.otherwise({redirectTo: '/'});
});