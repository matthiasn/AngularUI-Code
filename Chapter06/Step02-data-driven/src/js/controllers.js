'use strict';
angular.module('myApp.controllers', []).controller('BarChartCtrl', function ($scope) {
  $scope.container = { width: 300, height: 300, gap: 10 };

  $scope.bars = [
    { color: 'blue', percentage: 50 },
    { color: 'orange', percentage: 60 },
    { color: 'red', percentage: 10 }
  ];

  $scope.setDetails = function(bar, index) {
    var barWidth = $scope.container.width/$scope.bars.length - $scope.container.gap;

    return {
      height: bar.percentage + '%',
      background: bar.color,
      width: barWidth + 'px',
      left: $scope.container.gap + ($scope.container.gap + barWidth)*index + 'px'
    };
  };
});
