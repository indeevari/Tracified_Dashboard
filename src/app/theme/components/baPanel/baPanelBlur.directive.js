
(function () {
  'use strict';

  angular.module('TracifiedAdmin.theme')
      .directive('baPanelTracified', baPanelTracified);

  /** @ngInject */
  function baPanelTracified(baPanelTracifiedHelper, $window, $rootScope) {
    var bodyBgSize;

    baPanelTracifiedHelper.bodyBgLoad().then(function() {
      bodyBgSize = baPanelTracifiedHelper.getBodyBgImageSizes();
    });

    $window.addEventListener('resize', function() {
      bodyBgSize = baPanelTracifiedHelper.getBodyBgImageSizes();
    });

    return {
      restrict: 'A',
      link: function($scope, elem) {
        if(!$rootScope.$isMobile) {
          baPanelTracifiedHelper.bodyBgLoad().then(function () {
            setTimeout(recalculatePanelStyle);
          });
          $window.addEventListener('resize', recalculatePanelStyle);

          $scope.$on('$destroy', function () {
            $window.removeEventListener('resize', recalculatePanelStyle);
          });
        }

        function recalculatePanelStyle() {
          if (!bodyBgSize) {
            return;
          }
          elem.css({
            backgroundSize: Math.round(bodyBgSize.width) + 'px ' + Math.round(bodyBgSize.height) + 'px',
            backgroundPosition: Math.floor(bodyBgSize.positionX) + 'px ' + Math.floor(bodyBgSize.positionY) + 'px'
          });
        }

      }
    };
  }

})();
