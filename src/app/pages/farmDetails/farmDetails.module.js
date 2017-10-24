
(function () {
    'use strict';
  
    angular.module('TracifiedAdmin.pages.farmDetails', ['ui.bootstrap'])
      .config(routeConfig);

    // angular.module('PopupDemo',['ui.bootstrap']);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('farmDetails', {
            url: '/farmDetails',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            controller: 'FarmDetailsPageCtrl',
            title: 'Farm Details',
            sidebarMeta: {
              icon: 'ion-compose',
              order: 300,
            },
          }).state('farmDetails.viewFarmDetails', {
            url: '/viewFarmDetails',
            templateUrl: 'app/pages/farmDetails/viewFarmDetails/viewFarmDetails.html',
            title: 'View Farm Details',
            sidebarMeta: {
              order: 0,
            },
          }).state('farmDetails.addFarmDetails', {
            url: '/addFarmDetails',
            templateUrl: 'app/pages/farmDetails/addFarmDetails/addFarmDetails.html',
            title: 'Add Farm Details',
            sidebarMeta: {
              order: 0,
            },
          });
      $urlRouterProvider.when('/farmDetails','/farmDetails/addFarmDetails','/farmDetails/viewFarmDetails');
    }
  
  })();
  