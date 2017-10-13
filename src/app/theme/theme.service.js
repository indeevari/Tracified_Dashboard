
(function () {
  'use strict';

  angular.module('TracifiedAdmin.theme')
    .service('themeLayoutSettings', themeLayoutSettings);

  /** @ngInject */
  function themeLayoutSettings(baConfig) {
    var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|windows phone/).test(navigator.userAgent.toLowerCase());
    var mobileClass = isMobile ? 'mobile' : '';
    var tracifiedClass = baConfig.theme.tracified ? 'tracified-theme' : '';
    angular.element(document.body).addClass(mobileClass).addClass(tracifiedClass);

    return {
      tracified: baConfig.theme.tracified,
      mobile: isMobile,
    }
  }

})();