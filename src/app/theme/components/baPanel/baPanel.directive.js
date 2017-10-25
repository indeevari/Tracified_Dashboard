
(function () {
  'use strict';

  /**
   * Includes basic panel layout inside of current element.
   */
  angular.module('TracifiedAdmin.theme')
      .directive('baPanel', baPanel);

  /** @ngInject */
  function baPanel(baPanel, baConfig) {
    return angular.extend({}, baPanel, {
      template: function(el, attrs) {
        var res = '<div  class="panel ' + (baConfig.theme.tracified ? 'panel-tracified' : '') + ' full-invisible ' + (attrs.baPanelClass || '');
        res += '" zoom-in ' + (baConfig.theme.tracified ? 'ba-panel-tracified' : '') + '>';
        res += baPanel.template(el, attrs);
        res += '</div>';
        return res;
      }
    });
  }
})();
