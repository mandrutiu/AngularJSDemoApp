(function () {
    'use strict';
    var demoApp = angular.module('demoApp')

    demoApp.value('restApiConfig', {
        countries:{ url: '/json/countries.json'}
    });
 
    utzformBuilderApp.factory('fbRestService', ['$resource','$window', 'restApiConfig', 'myConfig',
        function ($resource, $window, restApiConfig, myConfig) {

            //compile the rest service URL from the configuration file /common/config.js
            var factory = function () { };

            factory.prototype.getCountries = function () {
                return $resource(restApiConfig.countries.url, {}, {});
            };

            var service = {
                getInstance: function () { return new factory(); }
            };

            return service;
        }]);
}());
