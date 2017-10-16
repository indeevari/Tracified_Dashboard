
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.ui', [
    'TracifiedAdmin.pages.ui.typography',
    'TracifiedAdmin.pages.ui.buttons',
    'TracifiedAdmin.pages.ui.icons',
    'TracifiedAdmin.pages.ui.modals',
    'TracifiedAdmin.pages.ui.grid',
    'TracifiedAdmin.pages.ui.alerts',
    'TracifiedAdmin.pages.ui.progressBars',
    'TracifiedAdmin.pages.ui.notifications',
    'TracifiedAdmin.pages.ui.tabs',
    'TracifiedAdmin.pages.ui.slider',
    'TracifiedAdmin.pages.ui.panels',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui', {
          url: '/ui',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'UI Features',
          sidebarMeta: {
            icon: 'ion-android-laptop',
            order: 200,
          },
        });
  }

})();
