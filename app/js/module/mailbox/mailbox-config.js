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
                templateUrl: 'js/module/mailbox/view/inbox.tpl.html'
            })
            .state('mailbox.sent', {
                url: '/sent',
                templateUrl: 'js/module/mailbox/view/sent.tpl.html'
            })
            .state('mailbox.trash', {
                url: '/trash',
                templateUrl: 'js/module/mailbox/view/trash.tpl.html'
            })
    });
