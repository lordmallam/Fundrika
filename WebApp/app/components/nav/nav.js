'use strict';
angular.module('fundrikaApp')
  .controller('navCtrl',['$location', 'Auth' ,function ($location, Auth) {
    var vm = this;
    vm.searchActive = false;
      vm.logout = function () {
          Auth.logout();
          //redirect to login page
          $location.path('/login');
      };

      vm.toggleSearch = function () {
        vm.searchActive = !vm.searchActive;
      };

      vm.hideSearch = function () {
        console.log("Entered");
        if (vm.searchActive) {
          vm.searchActive = false;
        }
      };
  }]);