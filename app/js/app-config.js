/**
 * ng-mailbox
 * @module application.config
 */
angular.module('application.config', [
        'mailbox',
        'contacts',
        'settings',
        'help',
        'ui.router'
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'js/view/dashboard.tpl.html'
            });
    });
