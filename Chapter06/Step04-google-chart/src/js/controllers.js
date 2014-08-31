'use strict';
angular.module('myApp.controllers', []).controller('ChartCtrl', function ($scope) {
  $scope.chartObject = {
    type: 'PieChart',
    data: {
      "cols": [
        {label: "frameworks", type: "string"},
        {label: "shares", type: "number"}
      ],
      "rows": [
        {c: [{v: "Angular.js" }, {v: 54 }]},
        {c: [{v: "Backbone.js"}, {v: 9  }]},
        {c: [{v: "Ember.js"   }, {v: 2  }]},
        {c: [{v: "Knockout"   }, {v: 21 }]},
        {c: [{v: "Others"     }, {v: 14 }]}
      ]
    }
  };
});
