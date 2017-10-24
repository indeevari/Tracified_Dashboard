
(function () {
    'use strict';
  
    angular.module('TracifiedAdmin.pages.reportGenerator', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('reportGenerator', {
            url: '/reportGenerator',
            template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            controller: 'ReportGeneratorPageCtrl',
            title: 'Report Generator',
            sidebarMeta: {
              icon: 'ion-stats-bars',
              order: 300,
            },
          }).state('reportGenerator.efficiencyGenerator', {
            url: '/efficiencyGenerator',
            templateUrl: 'app/pages/reportGenerator/efficiencyGenerator/efficiencyGenerator.html',
            title: 'Efficiency Reports',
            sidebarMeta: {
              order: 0,
            },
          }).state('reportGenerator.qualityProcessCostGenerator', {
            url: '/qualityProcessCostGenerator',
            templateUrl: 'app/pages/reportGenerator/qualityProcessCostGenerator/qualityProcessCostGenerator.html',
            title: 'Quality Process Cost Generator Reports',
            sidebarMeta: {
              order: 0,
            },
          }).state('reportGenerator.salesTraceabilityCrossReport', {
            url: '/salesTraceabilityCrossReport',
            templateUrl: 'app/pages/reportGenerator/salesTraceabilityCrossReport/salesTraceabilityCrossReport.html',
            title: 'Sales Traceability Cross Reports',
            sidebarMeta: {
              order: 0,
            },
          }).state('reportGenerator.reportSummary', {
            url: '/reportSummary',
            templateUrl: 'app/pages/reportGenerator/reportSummary/reportSummary.html',
            title: 'Summary Reports',
            sidebarMeta: {
              order: 0,
            },
          });
      $urlRouterProvider.when('/reportGenerator','/reportGenerator/efficiencyGenerator','/reportGenerator/qualityProcessCostGenerator','/reportGenerator/salesTraceabilityCrossReport','/reportGenerator/reportSummary');
    }
  
  })();
  