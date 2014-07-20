angular.module('myApp.services', [])
  .factory('BookmarkStore', function() {
    return {
      get: function(sorted) {
        var bookmarks = JSON.parse(localStorage.getItem('pin-bookmarks') || '[]');
        return sorted ? bookmarks.sort(function(a, b) { return a.created < b.created; }) : bookmarks;
      },

      put: function(bookmarks) {
        localStorage.setItem('pin-bookmarks', JSON.stringify(bookmarks));
      }
    };
  });