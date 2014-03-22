'use strict';
angular.module('myApp.controllers', []).controller('IssueCtrl', function ($scope, $http) {
  $scope.pie = {
    legend: {
      visible: false
    },
    seriesDefaults: {
      labels: {
        visible: true,
        template: "#= category #: #= value#%"
      }
    },
    series: [{
      type: "pie",
      field: "value",
      categoryField: "category"
    }]
  };

  $scope.data = new kendo.data.DataSource({});

  $http.get('https://api.github.com/repos/angular/angular.js/issues?state=open&page=1&per_page=100&assignee=*').success(function(issues) {
    var assignees = [], data = [];

    issues.forEach(function(issue) {
      assignees.push({category: issue.assignee.login});
    });
    assignees = _.groupBy(assignees, function(assignee) { return assignee.category; });
    assignees = _.sortBy(assignees, function(assignee) { return assignee.length; }).reverse();
    assignees = assignees.slice(0, 10);
    
    assignees.forEach(function(assignee) {
      data.push({category: assignee[0].category, value: assignee.length});
    });

    $scope.data.data(data);
  });
});