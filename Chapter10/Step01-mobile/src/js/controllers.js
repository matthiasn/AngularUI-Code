angular.module('myApp.controllers', [])
  .controller('MainCtrl', function($scope, $rootScope, BookmarkStore, $route, $location, $filter) {
    loadBookmarks();

    $scope.$on('mainCtrl:loadBookmarks', loadBookmarks);

    function loadBookmarks() {
      $scope.bookmarks = $filter('filter')(BookmarkStore.get(true), BookmarkStore.searchCriteria);
      $scope.perPage = 10;
      $scope.totalPages = Math.ceil($scope.bookmarks.length / $scope.perPage);
      $scope.currentPage = parseInt($route.current.params.pageNumber, false) || 1;
      if ($scope.currentPage > $scope.totalPages) {
        $location.path('/page/1');
      } else {
        $scope.pageBookmarks = $scope.bookmarks.slice(($scope.currentPage - 1) * $scope.perPage, $scope.currentPage * $scope.perPage);
        $scope.pages = [];
        for (var i = 0; i < $scope.totalPages; i++) {
          $scope.pages.push(i + 1);
        }
      }
    }

    $scope.paginate = function(mode) {
      if ((mode === 'backward' && $scope.isFirst()) || (mode === 'forward' && $scope.isLast())) return;

      $rootScope.slideDirection = mode;
      $location.path('/page/' + ( mode === 'forward' ? $scope.currentPage + 1 : $scope.currentPage - 1 ));
    };

    $scope.isFirst = function() {
      return $scope.currentPage === 1;
    };

    $scope.isLast = function() {
      return $scope.currentPage === $scope.totalPages;
    };

    $scope.isDesktop = function() {
      return !Modernizr.touch && $scope.pages;
    };
  })
  .controller('BookmarkCtrl', function($scope, BookmarkStore, $rootScope, $element) {
    $scope.save = function() {
      var arrBookmarks = BookmarkStore.get();

      arrBookmarks.push({
        url     : $scope.bookmark.url,
        title   : $scope.bookmark.title,
        tags    : $scope.bookmark.tags.split(','),
        created : new Date().getTime()
      });

      BookmarkStore.put(arrBookmarks);
      $scope.bookmark = null;
      $rootScope.$broadcast('mainCtrl:loadBookmarks', {});
      $element.modal('hide');
    };
  })
  .controller('SearchCtrl', function($scope, BookmarkStore, $location, $route) {
    $scope.searchIt = function(searchCriteria) {
      BookmarkStore.searchCriteria = searchCriteria;
      $location.path('/page/1');
      $route.reload();
    };
  });