'use strict';

// Service to handle http requests
angular.module('seriesApp').service('service', function($http) {

  this.getSeries = function(callback) {
    $http.get('/api/get-series').then(callback);
  };

  this.updateSeries = function(series) {
    if(!series._id) {
      $http.post('/api/series', series).then(function() {
        window.location = '/';
      });
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
