'use strict';

angular.module('seriesApp').service('service', function($http) {

  this.getNowSeries = function(callback) {
    $http.get('/api/now-series').then(callback);
  };

  this.getFutureSeries = function(callback) {
    $http.get('/api/future-series').then(callback);
  };

  this.getPastSeries = function(callback) {
    $http.get('/api/past-series').then(callback);
  };



  this.updateSeries = function(series) {
    if(!series._id) {
      $http.post('/api/series', series);
    } else {
      $http.put('/api/series/' + series._id, series).then(function(result) {
        return result.data.series;
      });
    }
  };

  this.deleteSeries = function(series) {
    if (!series._id) {
      console.log("Id not found");
    }
    return $http.delete('/api/series/' + series._id).then(function() {
      console.log("I deleted " + series.title);
    });
  };


});
