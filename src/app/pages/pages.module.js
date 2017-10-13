
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages', [
    'ui.router',

    'TracifiedAdmin.pages.dashboard',
    'TracifiedAdmin.pages.ui',
    'TracifiedAdmin.pages.components',
    'TracifiedAdmin.pages.form',
    'TracifiedAdmin.pages.tables',
    'TracifiedAdmin.pages.charts',
    'TracifiedAdmin.pages.maps',
    'TracifiedAdmin.pages.profile',
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
    baSidebarServiceProvider.addStaticItem({
      title: 'Menu Level 1',
      icon: 'ion-ios-more',
      subMenu: [{
        title: 'Menu Level 1.1',
        disabled: true
      }, {
        title: 'Menu Level 1.2',
        subMenu: [{
          title: 'Menu Level 1.2.1',
          disabled: true
        }]
      }]
    });

    baSidebarServiceProvider.addStaticItem({
      title: 'Manage Users',
      icon: 'ion-person-stalker',
      subMenu: [{
        title: 'Add Users',
        disabled: true
      }, {
        title: 'Edit Users',
       disabled : true
      },
      {
        title: 'Delete Users',
       disabled : true
      },
    ]
      
    });
  }

})();
