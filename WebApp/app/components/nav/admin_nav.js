'use strict';
angular.module('fundrikaApp')
  .controller('adminNavCtrl', function (Utility) {
      var vm = this;
      vm.showCategoryMenu = false;
      vm.showCountryMenu = false;
      vm.showPaymentMenu = false;
      vm.showProjectMenu = false;
      vm.showUserMenu = false;
      vm.showFAQMenu = false;

      vm.toggle = function (menu) {
          
          if (menu === 'category') {
              vm.showCategoryMenu = !vm.showCategoryMenu;
              vm.showCountryMenu = false;
              vm.showPaymentMenu = false;
              vm.showProjectMenu = false;
              vm.showUserMenu = false;
              vm.showFAQMenu = false;
          } else if (menu === 'country') {
              vm.showCountryMenu = !vm.showCountryMenu;
              vm.showCategoryMenu = false;
              vm.showPaymentMenu = false;
              vm.showProjectMenu = false;
              vm.showUserMenu = false;
              vm.showFAQMenu = false;
          } else if (menu === 'project') {
              vm.showProjectMenu = !vm.showProjectMenu;
              vm.showCategoryMenu = false;
              vm.showCountryMenu = false;
              vm.showPaymentMenu = false;
              vm.showUserMenu = false;
              vm.showFAQMenu = false;
          } else if (menu === 'payment') {
              vm.showPaymentMenu = !vm.showPaymentMenu;
              vm.showCategoryMenu = false;
              vm.showCountryMenu = false;
              vm.showProjectMenu = false;
              vm.showUserMenu = false;
              vm.showFAQMenu = false;
          } else if (menu === 'user') {
              vm.showUserMenu = !vm.showUserMenu;
              vm.showCategoryMenu = false;
              vm.showCountryMenu = false;
              vm.showPaymentMenu = false;
              vm.showProjectMenu = false;
              vm.showFAQMenu = false;
          } else if (menu === 'faq') {
              vm.showFAQMenu = !vm.showFAQMenu;
              vm.showCategoryMenu = false;
              vm.showCountryMenu = false;
              vm.showPaymentMenu = false;
              vm.showProjectMenu = false;
              vm.showUserMenu = false;
          }
      };

      vm.isActive = function (route) { return Utility.isActivePath(route) };

  });