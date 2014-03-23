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
}).controller('PullCtrl', function ($scope, $http) {
  $http.get('https://api.github.com/repos/angular/angular.js/pulls?state=closed&page=1&per_page=100&sort=updated&direction=desc').success(function(pulls) {
    var pulley = [], data = [];

    pulls.forEach(function(pull) {
      pulley.push({value: new Date(pull.created_at).getDay()});
    });
    pulley = _.groupBy(pulley, function(pull) { return pull.value; });
    pulley = _.sortBy(pulley, function(pull, i) { return pull[0].value; });
    pulley.forEach(function(pull) {
      data.push({value: pull.length});
    });

    $scope.data.data(data);
  });

  $scope.column = {
    legend: {
      visible: false
    },
    valueAxis: {
      max: 100
    },
    categoryAxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    },
    series: [{
      type: "area",
      field: "value"
    }]
  };

  $scope.data = new kendo.data.DataSource({});
});