'use strict';

/**
 * @ngdoc overview
 * @name yoApp
 * @description
 * # yoApp
 *
 * Main module of the application.
 */
angular
  .module('fundrikaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });

      var interceptor = function (User, $q, $location) {
          return {
              request: function (config) {
                  var currentUser = User.getCurrentUser();
                  if (currentUser !== null) {
                      config.headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                  }
                  return config;
              },
              responseError: function (rejection) {
                  if (rejection.status === 401) {
                      $location.path('/login');
                      return $q.reject(rejection);
                  }
                  //TODO: handle unauthorized requests
                  if (rejection.status === 403) {
                      $location.path('/login');
                      return $q.reject(rejection);
                  }

                  return $q.reject(rejection);
              }
          };
      };

      var params = ['User','$q', '$location'];
      interceptor.$inject = params;
      $httpProvider.interceptors.push(interceptor);



      $routeProvider
          .when('/login', {
              templateUrl: 'views/login.html',
              controller: 'loginCtrl',
              controllerAs: 'login'
          })
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainCtrl',
            controllerAs: 'main'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl',
            controllerAs: 'about'
        })
        .otherwise({
            redirectTo: '/'
        });
  });