/**
 * ng-mailbox
 * @module contacts.config
 */
angular.module('contacts.config', [
        'ui.router'
    ])

    .config(function ($stateProvider) {
        'use strict';

        $stateProvider
            .state('contacts', {
                url: '/contacts',
                templateUrl: 'js/module/contacts/view/contacts.tpl.html'
            });
    });
