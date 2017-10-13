/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.dashboard')
      .directive('tracifiedFeed', tracifiedFeed);

  /** @ngInject */
  function tracifiedFeed() {
    return {
      restrict: 'E',
      controller: 'TracifiedFeedCtrl',
      templateUrl: 'app/pages/dashboard/tracifiedFeed/tracifiedFeed.html'
    };
  }
})();