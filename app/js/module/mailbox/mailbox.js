/**
 * ng-mailbox
 * @module mailbox
 */
angular.module('mailbox', [
        'mailbox.config'
    ])

    .controller('InboxListCtrl', function ($scope, MAILS) {
        'use strict';

        $scope.mails = MAILS;
    })

    .controller('InboxDetailCtrl', function ($scope, mail) {
        'use strict';

        $scope.detail = mail;
    });
