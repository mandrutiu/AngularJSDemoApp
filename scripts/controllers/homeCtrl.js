(function () {
    'use strict';
    var demoModule = angular.module('demoApp');
    
    demoModule.controller('homeCtrl', homeCtrlMethod);

    function homeCtrlMethod($scope, $routeParams) {
    	this.info = "How do you do ?";
    };
}());