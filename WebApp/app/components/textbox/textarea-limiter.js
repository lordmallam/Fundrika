angular.module('fundrikaApp')
    .directive('textareaLimiter', function () {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                rows:'@'
            },
            link: function (scope, elem, attr, ctrl) {
                angular.element(elem).addClass(attr.customStyle);
                var textbox = angular.element(elem[0].querySelector('textarea'));
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
            templateUrl: 'components/textbox/textarea-limiter.html'
        };
    });