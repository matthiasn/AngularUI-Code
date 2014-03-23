'use strict';
angular.module('myApp.controllers', []).controller('KendoCtrl', function ($scope) {
  $scope.frameworks = {
    data: [{
      category: "Angular.js",
      value: 54,
      color: "#3f85f2"
    }, {
      category: "Backbone.js",
      value: 9,
      color: "#db4437"
    }, {
      category: "Ember.js",
      value: 2,
      color: "#f4b400"
    }, {
      category: "Knockout",
      value: 21,
      color: "#0f9d58"
    }, {
      category: "Others",
      value: 14,
      color: "#004d38"
    }]
  };

  $scope.pie = {
    series: [{
      type: "pie",
      field: "value"
    }]
  };
});
