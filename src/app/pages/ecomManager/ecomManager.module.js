
(function () {
    'use strict';
  
    angular.module('TracifiedAdmin.pages.ecomManager', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('ecomManager', {
            url: '/ecomManager',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            controller: 'EcomManagerPageCtrl',
            title: 'E-commerce Manager',
            sidebarMeta: {
              icon: 'ion-document',
              order: 300,
            },
          }).state('ecomManager.connectEcomPlugin', {
            url: '/connectEcomPlugin',
            templateUrl: 'app/pages/ecomManager/connectEcomPlugin/connectEcomPlugin.html',
            title: 'Connect to Ecommerce Plugin',
            sidebarMeta: {
              order: 0,
            },
          });
      $urlRouterProvider.when('/ecomManager','/ecomManager/connectEcomPlugin');
    }
  
  })();
  