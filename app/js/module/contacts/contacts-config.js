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
                url: '/list/:lang',
                templateUrl: function ($stateParams){
                    var lang = $stateParams.lang || 'en';

                    return 'js/module/contacts/view/list.' + lang + '.tpl.html';
                }
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
