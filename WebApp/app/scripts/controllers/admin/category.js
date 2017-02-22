'use strict';

angular.module('fundrikaApp')
  .controller('adminCategoryCtrl', function (Category, Utility, $uibModal) {
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

      vm.openAddDialog = function () {
          $uibModal.open({
              templateUrl: 'addItem.html',
              controller: 'modalCtrl',
              controllerAs: 'ctrl'
          });
      };

      vm.textScope = function () {
          console.log("Scope", vm.textbox1);
      }

      
  })
.controller('modalCtrl', function ($uibModalInstance) {
    var vm = this;
    vm.title = "Add New Category";
    vm.addItem = function () {
        console.log("I have added a new item");
    };
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    
});