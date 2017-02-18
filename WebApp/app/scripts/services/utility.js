'use strict';

angular.module('fundrikaApp')
    .factory('Utility', function ($location) {

        function isActivePath (route) {
            return route === $location.path();
        };

        function byteToImage(byte) {
            return 'data:image/png;base64,' + byte;
        };

        return {
            isActivePath: isActivePath,
            byteToImage: byteToImage
        }
    });