'use strict';

angular.module('fundrikaApp')
  .controller('adminPaymentMethodCtrl', function (Utility, $uibModal, $scope, Common, $location) {
      var entity = 'paymentType';
      var vm = this;
      vm.hasError = false;
      vm.currentPage = 1;
      vm.pageSize = 20;
      vm.sortByName = true;
      vm.getImageFromByte = function (byte) {
          return Utility.byteToImage(byte);
      };
      vm.errorMessage = 'server connection error';
      Common.all(entity).then(function (data) {
          vm.list = data;
      }).catch(function (res) {
          vm.hasError = true;
          vm.errorMessage = res.data.Message;          
      });

      vm.openAddDialog = function () {
         var aDialog = $uibModal.open({
           templateUrl: 'item.html',
           controller: 'addPaymentMethodModalCtrl',
              controllerAs: 'ctrl'
         });

         aDialog.result.then(function (addedItem) {
             vm.list.push(addedItem);
         });
      };


      vm.openEditDialog = function (item) {
         var eDialog = $uibModal.open({
              templateUrl: 'item.html',
              controller: 'editPaymentMethodModalCtrl',
              controllerAs: 'ctrl',
              resolve: {
                  EditItem: function () {
                      return item;
                  }
              }
         });

         eDialog.result.then(function (updatedItem) {
             for (var i = 0; i < vm.list.length; i++) {
                 if (vm.list[i].Id === updatedItem.Id) {
                     vm.list[i] = updatedItem;
                     break;
                 }
             }
         });
      };

      vm.openDeleteDialog = function (item) {
          var dDialog = $uibModal.open({
              templateUrl: '../../views/admin/delete.html',
              controller: 'deletePaymentMethodModalCtrl',
              controllerAs: 'ctrl',
              resolve: {
                  DeleteItem: function () {
                      return item;
                  }
              }
          });

          dDialog.result.then(function (deletedItem) {
              for (var i = 0; i < vm.list.length; i++) {
                  if (vm.list[i].Id === deletedItem) {
                      vm.list.splice(i, 1);
                      break;
                  }
              }
          });
      };

      vm.sortBy = function (propertyName) {
          vm.isSorted = true;
          if (vm.sortByName) {
              vm.list = Utility.orderByAsc(vm.list, propertyName);
              vm.sortByName = !vm.sortByName;
          } else {
              vm.list = Utility.orderByDesc(vm.list, propertyName);
              vm.sortByName = !vm.sortByName;
          }
          
      };
                  
  })
.controller('addPaymentMethodModalCtrl', function ($scope, $uibModalInstance, Utility, Common) {
    var vm = this;
    var entity = 'paymentType';
    vm.title = 'Add New Payment Method';
    vm.actionName = 'Add Payment Method';
    vm.errorMessage = '';
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.actionMethod = function () {
        if (isValidate()) {
            vm.isLoading = true;
            vm.errorMessage = '';
            var getImageResize = Utility.handleImageConversion(vm.addImage, 150, 100, 0);
            getImageResize.then(function (imgArray) {
                var nPaymentMethod = {};
                nPaymentMethod.Name = vm.name;
                nPaymentMethod.Description = vm.description;
                nPaymentMethod.Icon = imgArray;
                Common.add(entity, nPaymentMethod)
                .then(function (res) {
                    nPaymentMethod.Id = res;
                    $uibModalInstance.close(nPaymentMethod);
                })
                .catch(function (reject) {
                    vm.errorMessage = reject.data.Message;
                });
                vm.isLoading = false;
            }).catch(function (reject) {
                vm.errorMessage = reject.data.Message;
            });            
        } else {
            vm.errorMessage = 'Provide all required fields.';
        }
    };

    function isValidate() {
      return !(Utility.isUndefinedOrNull(vm.name) ||
           Utility.isUndefinedOrNull(vm.description) || Utility.isUndefinedOrNull(vm.addImage));
    }
    
})
.controller('editPaymentMethodModalCtrl', function ($scope, $uibModalInstance, Utility, Common, EditItem) {
    var vm = this;
    var entity = 'paymentType';
    vm.title = 'Edit Payment Method | ' + EditItem.Name;
    vm.actionName = 'Edit Payment Method';
    vm.errorMessage = '';
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.name = EditItem.Name;
    vm.description = EditItem.Description;
    vm.uploadImage = "url('" + Utility.byteToImage(EditItem.Icon) + "')";
    vm.addImage = EditItem.Icon;

    vm.actionMethod = function () {
        if (isValidate()) {
            vm.isLoading = true;
            vm.errorMessage = '';
            var getImageResize = Utility.handleImageConversion(vm.addImage, 150, 100, 0);
            getImageResize.then(function (imgArray) {
                var nPaymentMethod = {};
                nPaymentMethod.Name = vm.name;
                nPaymentMethod.Description = vm.description;
                nPaymentMethod.Icon = imgArray;
                nPaymentMethod.Id = EditItem.Id;
                Common.edit(entity, nPaymentMethod)
                .then(function () {
                    $uibModalInstance.close(nPaymentMethod);
                })
                .catch(function (reject) {
                    vm.errorMessage = reject.data.Message;
                });
                vm.isLoading = false;
            }).catch(function (reject) {
                vm.errorMessage = reject.data.Message;
            });
        } else {
            vm.errorMessage = 'Provide all required fields.';
        }
    };

    function isValidate() {
        return !(Utility.isUndefinedOrNull(vm.name) ||
            Utility.isUndefinedOrNull(vm.description) || Utility.isUndefinedOrNull(vm.addImage));
    }

})
.controller('deletePaymentMethodModalCtrl', function ($scope, $uibModalInstance, Common, DeleteItem) {
    var vm = this;
    var entity = 'paymentType';
    vm.title = 'Delete Payment Method | ' + DeleteItem.Name;
    vm.actionName = 'Delete Method';
    vm.errorMessage = '';
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.actionMethod = function () {        
    vm.isLoading = true;
    vm.errorMessage = '';
    Common.deleted(entity, DeleteItem.Id)
    .then(function () {
        $uibModalInstance.close(DeleteItem.Id);
    })
    .catch(function (reject) {
        vm.errorMessage = reject.data.Message;
    });
    vm.isLoading = false;           
    };

});