'use strict';
angular.module('myApp.controllers', []).controller('MapCtrl', function ($scope, $timeout) {
    $scope.myMarkers = [];

    $scope.eventBinding = {'map-click': 'addMarker($event, $params)'};

    $scope.mapOptions = {
        center: new google.maps.LatLng(37.782,-122.418),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    var cloudLayer = new google.maps.weather.CloudLayer();

    $scope.addMarker = function($event, $params) {
        $scope.myMarkers.push(new google.maps.Marker({
            map: $scope.myMap,
            position: $params[0].latLng
        }));
    };

    $timeout(function(){
        cloudLayer.setMap($scope.myMap);
    }, 1000);

});
