'use strict';

angular.module('fundrikaApp')
    .factory('Category', function ($http, $q, baseUrl, $rootScope) {
        var URL = baseUrl + '/api/category';
        var allPromise = null;

        $rootScope.$on('currentUserChanged', function () {
            allPromise = null;
        });

        function all(reload) {
            if (!reload && allPromise) {
                return allPromise;
            }
            return $http.get(URL)
              .then(function (res) {
                  return res.data;
              })
            .catch(function (res) {
                return $q.reject(res);
            });
        }

        return {
            all:all
        }

    });