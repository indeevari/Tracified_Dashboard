
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.ui.tabs', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.tabs', {
          url: '/tabs',
          templateUrl: 'app/pages/ui/tabs/tabs.html',
          title: 'Tabs & Accordions',
          sidebarMeta: {
            order: 800,
          },
        });
  }

})();
