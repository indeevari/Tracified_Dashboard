
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.ui.notifications', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('ui.notifications', {
          url: '/notifications',
          templateUrl: 'app/pages/ui/notifications/notifications.html',
          controller: 'NotificationsPageCtrl',
          title: 'Notifications',
          sidebarMeta: {
            order: 700,
          },
        });
  }

})();
