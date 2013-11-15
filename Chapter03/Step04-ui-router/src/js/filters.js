'use strict';
angular.module("myApp.filters", [])
    .filter('moment', function () {
        return function (input) {
            return moment(input).calendar();
        };
    })
    .filter("duration", function () {
        return function (event) {
            if (!event.end) { return "All Day"; }
            var start = moment(event.start);
            var end = moment(event.end);
            return end.diff(start, "minutes") + " min";
        };
    });
