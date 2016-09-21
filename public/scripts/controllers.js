'use strict';

angular.module('seriesApp').controller('seriesCtrl', function($scope, service) {

  $scope.statuses = ['Ser nu', 'Vill se', 'Har sett'];

  service.getSeries(function(response) {
    $scope.series = response.data.series;
  });

  $scope.saveSeries = function(series) {
    service.updateSeries(series);
    console.log('Series saved');
  };

  $scope.deleteSeries = function(series, index) {
    service.deleteSeries(series).then(function() {
      $scope.series.splice(index, 1);
    });
  };

  $scope.getSeriesIndex = function (series) {
    return $scope.series.indexOf(series);
  }

  $scope.sort = function(i) {
  $scope.chosenSorting = i;
}

});
