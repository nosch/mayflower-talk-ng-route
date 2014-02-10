/**
 * ng-mailbox
 * @module application
 */
angular.module('application', [
        'application.config'
    ])

    .run(function ($rootScope, $state, $stateParams) {
        'use strict';

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
