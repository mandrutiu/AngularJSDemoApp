    'use strict';
    var demoModule = angular.module('demoApp');
    
    demoModule.controller('demoCtrl', demoCtrlMethod);

    function demoCtrlMethod($scope, $routeParams) {
    	$scope.routeParams = $routeParams;
        $scope.containerBkColor = 'background-color:red';
    };
