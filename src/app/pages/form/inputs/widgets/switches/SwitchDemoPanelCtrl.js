/**
 * @author v.lugovsky
 * created on 10.12.2017
 */
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.form')
      .controller('SwitchDemoPanelCtrl', SwitchDemoPanelCtrl);

  /** @ngInject */
  function SwitchDemoPanelCtrl() {
    var vm = this;
    vm.switches = {
      s1: true,
      s2: false,
      s3: true,
      s4: true,
      s5: false
    };
  }

})();
