
(function () {
    'use strict';
  
    angular.module('TracifiedAdmin.pages.stageManager', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('stageManager', {
            url: '/stageManager',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            controller: 'StageManagerPageCtrl',
            title: 'Stage Manager',
            sidebarMeta: {
              icon: 'ion-grid',
              order: 300,
            },
          }).state('stageManager.viewStages', {
            url: '/viewStages',
            templateUrl: 'app/pages/stageManager/viewStages/viewStageManager.html',
            title: 'View Stages',
            sidebarMeta: {
              order: 0,
            },
          }).state('stageManager.addStages', {
            url: '/addStages',
            templateUrl: 'app/pages/stageManager/addStages/addStageManager.html',
            title: 'Add Stages',
            sidebarMeta: {
              order: 0,
            },
          });
      $urlRouterProvider.when('/stageManager','/stageManager/addStages','/stageManager/viewStages');
    }
  
  })();
  