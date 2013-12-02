'use strict';

/** data service, manages data model throughout the lifecycle of the application */
angular.module('myApp.services', []).factory('dataService', function () {
    var exports = {};

    exports.data = [
        {lang: "Plankalkül", year: 1943, decade: "1940s"},
        {lang: "Fortan", year: 1954, decade: "1950s"},
        {lang: "LISP", year: 1956, decade: "1950s"},
        {lang: "Basic", year: 1964, decade: "1960s"},
        {lang: "Pascal", year: 1970, decade: "1970s"},
        {lang: "C", year: 1972, decade: "1970s"},
        {lang: "ML", year: 1973, decade: "1970s"},
        {lang: "Postscript", year: 1982, decade: "1980s"},
        {lang: "C++", year: 1983, decade: "1980s"},
        {lang: "Postscript", year: 1982, decade: "1980s"},
        {lang: "Erlang", year: 1987, decade: "1980s"},
        {lang: "Haskell", year: 1990, decade: "1990s"},
        {lang: "Python", year: 1991, decade: "1990s"},
        {lang: "Java", year: 1995, decade: "1990s"},
        {lang: "Javascript", year: 1995, decade: "1990s"},
        {lang: "Scala", year: 2003, decade: "2000s"},
        {lang: "F#", year: 2005, decade: "2000s"},
        {lang: "Dart", year: 2011, decade: "2010s"},
        {lang: "Typescript", year: 2012, decade: "2010s"},
    ];

    return exports;
});
