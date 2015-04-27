(function(){
'use strict';
angular.module('demoApp').directive('customDropdown', function() {
  return {
    restrict: 'E',
    replace: true,
    transclude:true,
    scope: {
      elements:'=',
      selectModel:'=',
      onChangeMethod:'&'
    },
    templateUrl: '/views/custom-dropdown.html',
    controller: function ($scope, $element, $attrs) {

      $scope.applyElementSelection = function(element){
        $scope.selectModel = { fieldData:element };
        $scope.onChangeMethod({ element:element });
        $scope.$apply();
      }
    }
  }
});
}());
