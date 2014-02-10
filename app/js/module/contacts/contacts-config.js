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
            })
            .state('contacts.list', {
                url: '/list',
                templateUrl: 'js/module/contacts/view/list.tpl.html'
            })
            .state('contacts.create', {
                url: '/create',
                templateUrl: 'js/module/contacts/view/create.tpl.html'
            })
    });
