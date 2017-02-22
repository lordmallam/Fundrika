angular.module('fundrikaApp')
    .directive('imageUpload', function () {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                src: '@',
                imageHeight: '@',
                mode: '@'
            },
            link: function (scope, elem, attr, ctrl) {
                var img = angular.element(elem[0].querySelector('#img-node'));
                if (scope.src === null || angular.isUndefined(scope.src) || scope.src === '') {
                    scope.src = 'components/media/default-image-md.png';
                }
            },
            templateUrl: 'components/media/image-upload.html'
        };
    });