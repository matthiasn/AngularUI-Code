'use strict';
describe('specs for directives', function() {
  beforeEach(module('myApp.directives'));
  var $scope; 
  beforeEach(inject(function($rootScope) {
    $scope = $rootScope.$new();  	
   	$scope.name = {first: "Jane", last: "Doe"};
  }));

  describe('hello-world', function() {
    it('should contain the provided name', function() {
      inject(function($compile) {
        var element = $compile('<div hello-world name="name"></div>')($scope);
   		  $scope.$digest();
        expect(element.html()).toContain('Jane');
      });
    });
  });
});