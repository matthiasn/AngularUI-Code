'use strict';
angular.module('myApp.directives', []).directive('barChart', function() {
  return {
    restrict: 'E',
    template: "<div class='container' ng-style='setContainer()'>\
      <div class='bar' ng-repeat='bar in bars' ng-style='setDetails(bar, $index)'>{{bar.color}} - {{bar.percentage}}%</div>\
    </div>",
    link: function(scope, element, attrs) {
      scope.container = {
        width:  scope.$eval(attrs.width)  || 300,
        height: scope.$eval(attrs.height) || 300,
        gap:    scope.$eval(attrs.gap)    || 10
      };

      scope.bars = scope.$eval(attrs.data) || [];

      scope.setContainer = function() {
        return {
          'padding-right': scope.container.gap + 'px',
          'width': scope.container.width + 'px',
          'height': scope.container.height + 'px'
        };
      };

      scope.setDetails = function(bar, index) {
        var barWidth = scope.container.width/scope.bars.length - scope.container.gap;

        return {
          height: bar.percentage + '%',
          background: bar.color,
          width: barWidth + 'px',
          left: scope.container.gap + (scope.container.gap + barWidth)*index + 'px'
        };
      };
    }
  };
});