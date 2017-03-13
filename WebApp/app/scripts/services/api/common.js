'use strict';

angular.module('fundrikaApp')
    .factory('Common', function ($http, $q, baseUrl) {
        var URL = baseUrl + '/api/';

        function all(entity) {
            var requestURL = URL + entity;
            return $http.get(requestURL)
              .then(function (res) {
                  return res.data;
              })
            .catch(function (res) {
                return $q.reject(res);
            });
        }

        function add(entity, payload) {
            var requestURL = URL + entity;
            return $http.post(requestURL, payload)
              .then(function (res) {
                  return res.data;
              })
            .catch(function (res) {
                return $q.reject(res);
            });
        }

        function edit(entity, payload) {
            var requestURL = URL + entity;
            return $http.put(requestURL, payload)
              .then(function (res) {
                  return res.data;
              })
            .catch(function (res) {
                return $q.reject(res);
            });
        }

        function deleted(entity, payload) {
            var requestURL = URL + entity + '/' + payload;
            return $http.delete(requestURL, payload)
              .then(function (res) {
                  return res.data;
              })
            .catch(function (res) {
                return $q.reject(res);
            });
        }

        return {
            all: all,
            add: add,
            edit: edit,
            deleted: deleted
        };

    });