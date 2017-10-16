/**
 * Created by n.poltoratsky
 * on 23.06.2017.
 */
(function(){
    'use strict';

    angular.module('TracifiedAdmin.pages.form')
        .controller('datepickerCtrl', datepickerCtrl);

    /** @ngInject */
    function datepickerCtrl($scope) {

        $scope.dt = new Date();
        $scope.options = {
            showWeeks: false
        };

    }
})();