"use strict";

angular.module('fundrikaApp')
    .directive('textboxLimiter', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                ngModel: '='
            },
            link: function (scope, elem, attr) {
                angular.element(elem).addClass(attr.customStyle);
                var textbox = angular.element(elem[0].querySelector('input'));
                var label = angular.element(elem[0].querySelector('label'));
                label[0].textContent = '0/' + attr.max;
                elem.bind('keyup keypress', function (e) {
                    e = e || window.event;
                    if (textbox[0].value.length >= attr.max) {
                        e.preventDefault();
                    }
                    label[0].textContent = textbox[0].value.length + '/' + attr.max;
                });
            },
            templateUrl: 'components/textbox/textbox-limiter.html'
        };
    });