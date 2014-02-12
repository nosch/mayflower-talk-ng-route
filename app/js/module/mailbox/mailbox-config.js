/**
 * ng-mailbox
 * @module mailbox.config
 */
angular.module('mailbox.config', [
        'ui.router'
    ])

    .constant('MAILS', [{
        from: 'John Doe',
        subject: 'Consequences that are extremely painful!',
        date: '13.02.2014'
    }, {
        from: 'The Bush Doctor',
        subject: 'All this mistaken ideas.',
        date: '09.02.2014'
    }, {
        from: 'Jane Doe',
        subject: 'No one rejects, dislikes, or avoids pleasure.',
        date: '20.01.2014'
    }, {
        from: 'Mrs Robinson',
        subject: 'Because it is pain!',
        date: '10.01.2014'
    }, {
        from: 'Kilroy',
        subject: 'A trivial example.',
        date: '24.12.2013'
    }])

    .config(function ($stateProvider) {
        'use strict';

        var template = '<p><i class="ellipsis horizontal icon"></i></p>';

        $stateProvider
            .state('mailbox', {
                url: '/mailbox',
                templateUrl: 'js/module/mailbox/view/mailbox.tpl.html',
                abstract: true
            })
            .state('mailbox.inbox', {
                url: '/inbox/:id',
                templateUrl: 'js/module/mailbox/view/inbox.tpl.html',
                controller: 'InboxListCtrl',
                resolve: {
                    mail: function ($stateParams, MAILS) {
                        var id = $stateParams.id - 1;

                        return  MAILS[id];
                    }
                }
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
