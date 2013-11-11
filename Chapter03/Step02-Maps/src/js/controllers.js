'use strict';
angular.module('myApp.controllers', []).controller('MapCtrl', function ($scope, $timeout) {
    $scope.myMarkers = [];

    $scope.eventBinding = {'map-click': 'addMarker($event, $params)'};

    $scope.mapOptions = {
        center: new google.maps.LatLng(35.784, -78.670),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    var weatherLayer = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
    });
    var cloudLayer = new google.maps.weather.CloudLayer();

    $scope.addMarker = function($event, $params) {
        $scope.myMarkers.push(new google.maps.Marker({
            map: $scope.myMap,
            position: $params[0].latLng
        }));
    };

    $scope.setZoomMessage = function(zoom) {
        $scope.zoomMessage = 'You just zoomed to '+zoom+'!';
        console.log(zoom,'zoomed')
    };

    $timeout(function(){
        weatherLayer.setMap($scope.myMap);
        cloudLayer.setMap($scope.myMap);
    }, 2000);
});
