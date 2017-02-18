'use strict';
angular.module('fundrikaApp')
  .controller('navCtrl',['$location', 'Auth' ,function ($location, Auth) {
      var vm = this;
      vm.logout = function () {
          Auth.logout();
          //redirect to login page
          $location.path('/login');
      };
  }]);