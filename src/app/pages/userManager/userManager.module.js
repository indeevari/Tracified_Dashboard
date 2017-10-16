
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.userManager', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('userManager', {
          url: '/userManager',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'UserManagerPageCtrl',
          title: 'User Manager',
          sidebarMeta: {
            icon: 'ion-person-stalker',
            order: 300,
          },
        }).state('userManager.viewUsers', {
          url: '/viewUsers',
          templateUrl: 'app/pages/userManager/viewUsers/viewUserManager.html',
          title: 'View Users',
          sidebarMeta: {
            order: 0,
          },
        }).state('userManager.addUsers', {
          url: '/addUsers',
          templateUrl: 'app/pages/userManager/addUsers/addUserManager.html',
          title: 'Add Users',
          sidebarMeta: {
            order: 0,
          },
        });
    $urlRouterProvider.when('/userManager','/userManager/addUsers','/userManager/viewUsers');
  }

})();
