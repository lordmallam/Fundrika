"use strict";

angular.module('fundrikaApp')
    .directive('dropDown', function () {
        return {
            require: '^ngModel',
            restrict: 'E',
            scope: {
                ngModel: '=',
                list: '=',
                lineHeight: '@',
                showFilter: '@'
            },
            link: function (scope, elem, attrs, ngModelCtrl) {
              scope.id = guid();
              scope.list = _.orderBy(scope.list, ['name'], ['asc']);
                scope.itemChanged = function (selectedItem) {
                    scope.ngModel = selectedItem;
                    ngModelCtrl.$setViewValue(selectedItem);
                };
                scope.itemChanged(scope.list[0]);

                function guid() {
                    function s4() {
                        return Math.floor((1 + Math.random()) * 0x10000)
                          .toString(16) 
                          .substring(1);
                    }
                    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                      s4() + '-' + s4() + s4() + s4();
                }
            },
            templateUrl: 'components/dropdown/dropdown.html'
        };
    });