angular.module('myApp.controllers', []).controller('ViewIssueCtrl', function($scope, $route, $element, $timeout) {
  $scope.$watch(function() { return $route.current && $route.current.params.issue; }, function(newVal, oldVal) {
    $scope.showTab = !!newVal;
    $scope.issueId = newVal;

    $timeout(function() {
      if ($scope.showTab) {
        $element.find('a').click();
      } else {
        $element.siblings().first().find('a').click();
      }
    }, 0, false);
  });

  $scope.carousel = [
    { image: 'images/1.png' },
    { image: 'images/2.png' },
    { image: 'images/3.png' }
  ];
}).controller('FindCtrl', function($scope, $location) {
  $scope.issues = [
    {'id': 16877, 'name': '#16877'},
    {'id': 1030, 'name': '#1030'},
    {'id': 2039, 'name': '#2039'},
    {'id': 1134, 'name': '#1134'},
    {'id': 1078, 'name': '#1078'},
    {'id': 2690, 'name': '#2690'}
  ];

  $scope.onSelect = function(item) {
    $location.path('/issue/' + item.id);
    $scope.find = '';
  };
});