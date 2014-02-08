/**
 * Unit Testing: Application/Controller
 */

describe('Unit Testing: Application/Controller', function () {
    'use strict';

    var $scope, $controller;

    beforeEach(module('application'));

    beforeEach(inject(function ($injector) {
        $scope = $injector.get('$rootScope');
        $controller = $injector.get('$controller');
    }));

    describe('HomeCtrl', function () {
        it('should set the correct heading text "Mayflower Lightning Talk!"', function () {
            var expected = {
                heading: 'Mayflower Lightning Talk!'
            };

            var params = {
                $scope: $scope
            };

            $controller('HomeCtrl', params);

            expect($scope.heading).toBe(expected.heading);
        });
    });
});
