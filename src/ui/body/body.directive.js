'use strict';
gantt.directive('ganttBody', [function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        templateUrl: function(tElement, tAttrs) {
            if (tAttrs.templateUrl === undefined) {
                return 'default.body.tmpl.html';
            } else {
                return tAttrs.templateUrl;
            }
        },
        controller: ['$scope', '$element', 'Body', function($scope, $element, Body) {
            $scope.body = new Body();
            $scope.body.$element = $element;
        }]
    };
}]);