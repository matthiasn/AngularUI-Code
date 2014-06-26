angular.module('myApp.controllers', []).controller('AdvanceTabCtrl', function($scope, $templateCache) {
  // Alternatively use $parent.$parent.$parent.close but not necessary 
  // because the scope is prototypically inherited
  $templateCache.put("template/tabs/tab.html",
    // '<li ng-class="{active: active, disabled: disabled}">\
    //   <a ng-click="select()" tab-heading-transclude>\
    //     <button type="button" class="close" ng-click="$parent.close($parent.$index)" ng-style="{true: {visibility: \'hidden\'}}[!active]">&times;</button>\
    //     {{heading}}\
    //   </a>\
    // </li>'  
    '<li ng-class="{true: {active: active, disabled: disabled}}[heading != \'new_tab\']">\
      <a ng-show="heading != \'new_tab\'" ng-click="select()" tab-heading-transclude>\
       < button type="button" class="close" ng-click="$parent.close($parent.$index)" ng-style="{true: {visibility: \'hidden\'}}[!active || $parent.tab.closeable == false]">&times;</button>\
        {{heading}}\
      </a>\
      <a ng-show="heading == \'new_tab\'" ng-click="$parent.add()">\
        <i class="glyphicon glyphicon-plus"></i>\
      </a>\
    </li>'    
  );

  $scope.tabList = [{heading: 'Tab 1', content: '1.html', closeable: false}, {heading: 'Tab 2', content: '2.html'}, {heading: 'new_tab', content:''}];

  $templateCache.put('1.html', '<h1>I am One</h1>');
  $templateCache.put('2.html', '<h1>I am Two</h1>');

  $scope.close = function(tabScope) {
    $scope.tabList.splice(tabScope, 1);
  };

  $scope.add = function() {
    $scope.tabList.splice($scope.tabList.length - 1, 0, {heading: 'Tab ' + $scope.tabList.length, content: ''});
  };
});
