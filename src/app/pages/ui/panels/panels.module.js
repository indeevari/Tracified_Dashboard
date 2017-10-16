
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.ui.panels', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.panels', {
          url: '/panels',
          templateUrl: 'app/pages/ui/panels/panels.html',
          controller: 'NotificationsPageCtrl',
          title: 'Panels',
          sidebarMeta: {
            order: 1100,
          },
        });
  }

})();
