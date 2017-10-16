
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.components.mail')
    .controller('MailListCtrl', MailListCtrl);

  /** @ngInject */
  function MailListCtrl($stateParams,  mailMessages) {
    var vm = this;
    vm.messages = mailMessages.getMessagesByLabel($stateParams.label);
    vm.label = $stateParams.label;
  }

})();
