/**
 * ng-mailbox
 * @module mailbox.config
 */
angular.module('mailbox.config', [
        'ui.router'
    ])

    .config(function ($stateProvider) {
        'use strict';

        $stateProvider
            .state('mailbox', {
                url: '/mailbox',
                templateUrl: 'js/module/mailbox/view/mailbox.tpl.html'
            });
    });
