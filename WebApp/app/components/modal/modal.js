﻿"use strict";

angular.module('fundrikaApp')
    .directive('modalDialog', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                actionName:'@',
                action: '&ngActionMethod',
                cancel: '&close',
                title: '=dialogTitle',
                errorMessage: '=',
                isLoading: '='
            },
            templateUrl: 'components/modal/modal.html'
        };
});