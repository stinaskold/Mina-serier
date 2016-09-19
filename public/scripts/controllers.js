'use strict';

angular.module('seriesApp').controller('seriesCtrl', function($scope, service) {

  // $scope.series = [{title: 'Downton Abbey', grade: 5, genre: 'Drama', channel: 'Netflix', status: 'Har sett'},{title: 'Gilmore Girls', grade: 5, genre: 'Dramakomedi', channel: 'Netflix', status: 'Har sett'}, {title: 'Enkel resa till Korfu', genre: 'Dramakomedi', channel: 'SVT-play', status: 'Ser nu'}];

  service.getNowSeries(function(response) {
    $scope.nowSeries =  response.data.nowSeries;
  });

  service.getFutureSeries(function(response) {
    $scope.futureSeries =  response.data.futureSeries;
  });

  service.getPastSeries(function(response) {
    $scope.pastSeries =  response.data.pastSeries;
  });


  $scope.saveSeries = function(series) {
    service.updateSeries(series);
    console.log('Series saved');
  };

  $scope.deleteSeries = function(series, index) {
    service.deleteSeries(series).then(function() {
      $scope.nowSeries.splice(index, 1);
    });
  };

  // $scope.getSeries = function() {
  //   $http.get('/api/series').then(function successCallback(response) {
  //     $scope.series =  response.data.series;
  //   }, function errorCallback(response) {
  //     // error
  //   });
  // };

});
