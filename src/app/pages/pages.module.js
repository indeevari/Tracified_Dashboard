
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages', [
    'ui.router',
    'TracifiedAdmin.pages.dashboard',
    'TracifiedAdmin.pages.userManager',
    'TracifiedAdmin.pages.reportGenerator',    
    // 'TracifiedAdmin.pages.stageManager',
    'TracifiedAdmin.pages.farmDetails',
    'TracifiedAdmin.pages.profile', 
    'TracifiedAdmin.pages.ecomManager',   
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');

    baSidebarServiceProvider.addStaticItem({
      title: 'Pages',
      icon: 'ion-document',
      subMenu: [{
        title: 'Sign In',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: 'Sign Up',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: 'User Profile',
        stateRef: 'profile'
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
  }

})();
