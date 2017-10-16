
(function () {
  'use strict';

  angular.module('TracifiedAdmin.theme')
    .run(themeRun);

  /** @ngInject */
  function themeRun($timeout, $rootScope, layoutPaths, preloader, $q, baSidebarService, themeLayoutSettings) {
    var whatToWait = [
      preloader.loadAmCharts(),
      $timeout(3000)
    ];

    var theme = themeLayoutSettings;
    if (theme.tracified) {
      if (theme.mobile) {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'tracified-bg-mobile.jpg'));
      } else {
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'tracified-bg.jpg'));
        whatToWait.unshift(preloader.loadImg(layoutPaths.images.root + 'tracified-bg-tracifiedred.jpg'));
      }
    }

    $q.all(whatToWait).then(function () {
      $rootScope.$pageFinishedLoading = true;
    });

    $timeout(function () {
      if (!$rootScope.$pageFinishedLoading) {
        $rootScope.$pageFinishedLoading = true;
      }
    }, 7000);

    $rootScope.$baSidebarService = baSidebarService;
  }

})();