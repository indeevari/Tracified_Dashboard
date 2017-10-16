
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.dashboard')
      .directive('weather', weather);

  /** @ngInject */
  function weather() {
    return {
      restrict: 'EA',
      controller: 'WeatherCtrl',
      templateUrl: 'app/pages/dashboard/weather/weather.html'
    };
  }
})();