/**
 * ng-mailbox
 * @module settings.config
 */
angular.module('settings.config', [
        'ui.router'
    ])

    .config(function ($stateProvider) {
        'use strict';

        $stateProvider
            .state('settings', {
                url: '/settings',
                templateUrl: 'js/module/settings/view/settings.tpl.html'
            });
    });
