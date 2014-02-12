/**
 * ng-mailbox
 * @module mailbox
 */
angular.module('mailbox', [
        'mailbox.config'
    ])

    .controller('InboxListCtrl', function ($scope, MAILS, mail) {
        'use strict';

        $scope.mails = MAILS;
        $scope.detail = mail;
    });
