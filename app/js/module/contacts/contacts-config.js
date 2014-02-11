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
                templateUrl: 'js/module/contacts/view/contacts.tpl.html',
                abstract: true
           })
            .state('contacts.list', {
                url: '/list',
                template: '<h3>Your contacts</h3> <p>...</p>'
            })
            .state('contacts.favorites', {
                url: '/favorites',
                template: '<h3>Favorite contacts</h3> <p>...</p>'
            })
            .state('contacts.create', {
                url: '/create',
                template: '<h3>Create new contact</h3> <p>...</p>'
            })
    });
