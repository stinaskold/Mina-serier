'use strict';

// Controller for series app
angular.module('seriesApp').controller('seriesCtrl', function($scope, service) {

  // Variables to store status, grade and type of sorting
  $scope.statuses = ['Ser nu', 'Vill se', 'Har sett'];
  $scope.grades = ['Inte bestämt', 1, 2, 3, 4, 5];
  $scope.sorting = 'title';

  // Get series from database
  service.getSeries(function(response) {
    $scope.series = response.data.series;
  });

  // Save series to database
  $scope.saveSeries = function(series) {
    service.updateSeries(series);
    console.log('Series saved');
  };

  // Delete series to database
  $scope.deleteSeries = function(series, index) {
    service.deleteSeries(series).then(function() {
    $scope.series.splice(index, 1);
    });
  };

  // get index of series
  $scope.getSeriesIndex = function (series) {
    return $scope.series.indexOf(series);
  }

});
