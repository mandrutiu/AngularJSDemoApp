(function (){
'use strict';
angular.module('demoApp').factory('userInfoService', ['$rootScope', function($rootScope) {
  var service = {};

  service.getUserName = function() {
    return $rootScope.globals.currentUser.username;
  };

  return service;
}]);

});
 