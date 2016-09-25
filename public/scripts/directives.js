'use strict';

angular.module('seriesApp').directive('seriesForm', function () {
	return {
		templateUrl: './templates/form.html',
		replace: true,
		controller: 'seriesCtrl'
	}
});
