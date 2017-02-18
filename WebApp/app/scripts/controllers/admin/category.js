'use strict';

angular.module('fundrikaApp')
  .controller('adminCategoryCtrl', function (Category, Utility) {
      var vm = this;
      vm.hasError = false;
      vm.currentPage = 1;
      vm.pageSize = 20;
      vm.getImageFromByte = function (byte) {
          return Utility.byteToImage(byte);
      };

      Category.all().then(function (data) {
          vm.categoryList = data;
          console.log("Data", data);
      }).catch(function (res) {
          vm.errorMessage = "Error loading data...";
          vm.hasError = true;
      });
      
  });