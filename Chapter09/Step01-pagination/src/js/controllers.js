angular.module('myApp.controllers', []).controller('GooglePaginationCtrl', function($scope, $templateCache) {
  $templateCache.put("template/pagination/pagination.html",
    '<table class="google-pagination">\
      <tbody>\
        <tr valign="top">\
          <td>\
            <span ng-if="noPrevious()" class="csb noprev"></span>\
            <a href ng-if="!noPrevious()" ng-click="selectPage(page - 1)"><span class="csb prev"></span></a>\
          </td>\
          <td ng-repeat="page in pages track by $index" ng-click="selectPage(page.number)">\
            <span ng-if="page.active"><span class="csb active"></span>{{page.text}}</span>\
            <a ng-if="!page.active"><span class="csb nonactive"></span>{{page.text}}</a>\
          </td>\
          <td>\
            <span ng-if="noNext()" class="csb nonext"></span>\
            <a href ng-if="!noNext()" ng-click="selectPage(page + 1)"><span class="csb next"></span></a>\
          </td>\
        </tr>\
      </tbody>\
    </table>'
  );

  $scope.totalItems = 100;
  $scope.currentPage = 2;
});