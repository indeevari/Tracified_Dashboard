
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.charts', [
      'TracifiedAdmin.pages.charts.amCharts',
      'TracifiedAdmin.pages.charts.chartJs',
      'TracifiedAdmin.pages.charts.chartist',
      'TracifiedAdmin.pages.charts.morris'
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('charts', {
          url: '/charts',
          abstract: true,
          template: '<div ui-view  autoscroll="true" autoscroll-body-top></div>',
          title: 'Charts',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 150,
          },
        });
  }

})();
