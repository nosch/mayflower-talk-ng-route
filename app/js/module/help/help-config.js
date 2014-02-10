/**
 * ng-mailbox
 * @module help.config
 */
angular.module('help.config', [
        'ui.router'
    ])

    .config(function ($stateProvider) {
        'use strict';

        $stateProvider
            .state('help', {
                url: '/help',
                templateUrl: 'js/module/help/view/help.tpl.html'
            });
    });
