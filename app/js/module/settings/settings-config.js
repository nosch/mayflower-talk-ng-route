/**
 * ng-mailbox
 * @module settings.config
 */
angular.module('settings.config', [
        'ui.router'
    ])

    .config(function ($stateProvider) {
        'use strict';

        $stateProvider
            .state('settings', {
                url: '/settings',
                templateUrl: 'js/module/settings/view/settings.tpl.html',
                abstract: true
            })
            .state('settings.first', {
                url: '/first',
                views: {
                    'one': {
                        templateUrl: 'js/module/settings/view/first/one.tpl.html'
                    },
                    'two': {
                        templateUrl: 'js/module/settings/view/first/two.tpl.html'
                    }
                }
            })
            .state('settings.second', {
                url: '/second',
                views: {
                    'one': {
                        templateUrl: 'js/module/settings/view/second/one.tpl.html'
                    },
                    'two': {
                        templateUrl: 'js/module/settings/view/second/two.tpl.html'
                    }
                }
            })
            .state('settings.second.more', {
                url: '/more',
                views: {
                    'a': {
                        templateUrl: 'js/module/settings/view/second/more/a.tpl.html'
                    },
                    'b': {
                        templateUrl: 'js/module/settings/view/second/more/b.tpl.html'
                    }
                }
            });
    });
