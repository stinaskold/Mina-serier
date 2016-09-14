'use strict';

angular.module('seriesApp').controller('seriesCtrl', function($scope, $http) {

  $scope.getSeries = function() {
    $http.get('/api/series').then(function successCallback(response) {
      $scope.animals =  response.data.animals;
    }, function errorCallback(response) {
      // error
    });
  );

});
