/**
 * ng-mailbox
 * @module mailbox.config
 */
angular.module('mailbox.config', [
        'ui.router'
    ])

    .config(function ($stateProvider) {
        'use strict';

        var template = '<p>...</p>';

        $stateProvider
            .state('mailbox', {
                url: '/mailbox',
                templateUrl: 'js/module/mailbox/view/mailbox.tpl.html',
                abstract: true
            })
            .state('mailbox.inbox', {
                url: '/inbox',
                templateUrl: 'js/module/mailbox/view/inbox.tpl.html'
            })
            .state('mailbox.drafts', {
                url: '/drafts',
                template: template
            })
            .state('mailbox.sent', {
                url: '/sent',
                template: template
            })
            .state('mailbox.spam', {
                url: '/spam',
                template: template
            })
            .state('mailbox.trash', {
                url: '/trash',
                template: template
            })
    });
