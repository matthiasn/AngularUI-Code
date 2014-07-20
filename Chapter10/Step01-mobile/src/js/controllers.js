angular.module('myApp.controllers', [])
  .controller('MainCtrl', function($scope, $rootScope, BookmarkStore, $route, $location, $element) {
    $scope.Modernizr = Modernizr;
    broadcastFn();

    $scope.$on('reloadBookmarks', broadcastFn);

    function broadcastFn() {
      $scope.bookmarks = BookmarkStore.get(true);
      $scope.perPage = Modernizr.touch ? 5 : 10;
      $scope.currentPage = parseInt($route.current.params.pageNumber, false) || 1;
      $scope.pageBookmarks = $scope.bookmarks.slice(($scope.currentPage - 1) * $scope.perPage, $scope.currentPage * $scope.perPage);
      $scope.totalPages = [];
      for (var i = 0; i < Math.ceil($scope.bookmarks.length / $scope.perPage); i++) {
        $scope.totalPages.push(i + 1);
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
      return $scope.currentPage === $scope.totalPages.length;
    };
  })
  .controller('BookmarkCtrl', function($scope, BookmarkStore, $rootScope) {
    $scope.bookmark = {
      url: 'http://google.com',
      title: 'foobar',
      tags: 'foo,bar'
    };

    $scope.save = function() {
      var arrBookmarks = BookmarkStore.get();

      arrBookmarks.push({
        url     : $scope.bookmark.url,
        title   : $scope.bookmark.title,
        tags    : $scope.bookmark.tags.split(','),
        created : new Date().getTime()
      });

      BookmarkStore.put(arrBookmarks);

      $rootScope.$broadcast('reloadBookmarks', {});
    };
  });