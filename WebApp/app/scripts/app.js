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
    'ngTouch',
    'ui.bootstrap',
    'colorpicker.module',
    'angular-click-outside'
  ])
  .config(function ($routeProvider, $locationProvider, $httpProvider, $qProvider) {
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });

      $qProvider.errorOnUnhandledRejections(false);

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
          .when('/admin', {
            templateUrl: 'views/admin/index.html',
            controller: 'adminNavCtrl',
            controllerAs: 'adminNav'
          })
          .when('/admin/categories', {
              templateUrl: 'views/admin/category.html',
              controller: 'adminCategoryCtrl',
              controllerAs: 'adminCat'
          })
          .when('/admin/sub-categories/:categoryid?', {
              templateUrl: 'views/admin/sub_category.html',
              controller: 'adminSubCategoryCtrl',
              controllerAs: 'adminSubCat'
          })
        .when('/admin/countries', {
            templateUrl: 'views/admin/country.html',
            controller: 'adminCountryCtrl',
            controllerAs: 'adminCountry'
        })
        .when('/admin/payment-methods', {
          templateUrl: 'views/admin/payment_methods.html',
          controller: 'adminPaymentMethodCtrl',
          controllerAs: 'adminPaymentMethod'
        })
        .when('/admin/admins', {
          templateUrl: 'views/admin/admin.html',
          controller: 'adminAdminCtrl',
          controllerAs: 'adminAdmin'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
