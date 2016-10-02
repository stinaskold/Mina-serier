'use strict';

// Directive to show header 
angular.module('seriesApp').directive('seriesHeader', function () {
	return {
		templateUrl: './templates/header.html',
		controller: 'seriesCtrl'
	}
});
