'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('fundrikaApp')
  .controller('mainCtrl', function (Common) {
    //var currentUser = User.getCurrentUser();
    var vm = this;
    vm.hasError = false;
    vm.errorMessage = 'server connection error';
    Common.all('category').then(function (data) {
      vm.categoryList = data;
    }).catch(function (res) {
      vm.hasError = true;
      vm.errorMessage = res.data.Message;
    });

    vm.changeCategory = function (category) {
      vm.activeCategory = category.Name;
      vm.activeColor = category.Color;
    };
    
  });
