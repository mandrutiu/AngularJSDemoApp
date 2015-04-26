(function (){
	'use strict';

/*
 * Main module of the application.
 */
angular.module('demoApp', [
  	'ngAnimate',    // animations
    'ngRoute',      // routing
    'ngResource',   // REST api calls
    'ngSanitize',   // sanitizes html bindings 
  ])
.config(function ($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider
    .when('/demo', {
      templateUrl: 'views/demo.html',
      controller: 'demoCtrl'
    })
    .when('/demo/:firstParam/:secondParams', {
      templateUrl: 'views/demo.html',
      controller: 'demoCtrl'
    })
    .when('/login', {
      templateUrl: '/views/login.html',
      controller: 'loginCtrl'
    })

   //$locationProvider.html5Mode(true);
   $httpProvider.interceptors.push('httpResponseInterceptor');
  })
.factory('httpResponseInterceptor',['$q','$location','$window',function($q,$location,$window){
      return {
        response: function(response){
          if (response.status === 401) {
            console.log("Response 401");
          }
          return response || $q.when(response);
        },
        responseError: function(rejection) {
          if (rejection.status === 401) {
            console.log("Response Error 401",rejection);
            $location.path('/login').search('returnTo', $location.path());
            //$window.location.reload();
          }
          return $q.reject(rejection);
        }
      }
}])
.run(['$rootScope', '$window', '$location', '$http',
    function ($rootScope, $window, $location, $http) {

      $rootScope.$on('$routeChangeStart', function (event, next, current) {
        $rootScope.user = {};
        $rootScope.user.isAuthenticated = true;
        if ($rootScope.user && $rootScope.user.isAuthenticated) {
          $http.defaults.headers.common['Authorization'] = 'Basic authentication data';
        }
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && !$rootScope.user) {
            $location.path('/login');
        }
      });
}]);
}())