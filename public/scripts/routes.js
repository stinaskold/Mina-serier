'use strict';

angular.module('seriesApp').config(function($routeProvider) {
    $routeProvider.when('/my-series', {
        templateUrl : './templates/my-series/index.html'
    })
    .when('/add-series', {
        templateUrl : './templates/add-series/index.html'
    }).when('/', {
        templateUrl : './templates/my-series/index.html'
    })
    .otherwise({ redirectTo: '/'});
});
