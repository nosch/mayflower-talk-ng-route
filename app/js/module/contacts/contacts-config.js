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
                url: '/list/:lang',
                templateUrl: function ($stateParams){
                    var lang = $stateParams.lang || 'en';

                    return 'js/module/contacts/view/list.' + lang + '.tpl.html';
                }
            })
            .state('contacts.favorites', {
                url: '/favorites',
                template: '<h2 class="ui header">Favorite contacts</h2> <p><i class="ellipsis horizontal icon"></i></p>'
            })
            .state('contacts.create', {
                url: '/create',
                template: '<h2 class="ui header">Create new contact</h2> <p><i class="ellipsis horizontal icon"></i></p>'
            })
    });
