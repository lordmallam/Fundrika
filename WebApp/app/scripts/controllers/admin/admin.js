'use strict';

angular.module('fundrikaApp')
  .controller('adminAdminCtrl', function (Utility, $uibModal, $scope, Common, $location) {
      var entity = 'admin';
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
           controller: 'addAdminModalCtrl',
              controllerAs: 'ctrl'
         });

         aDialog.result.then(function (addedItem) {
             vm.list.push(addedItem);
         });
      };


      vm.openEditDialog = function (item) {
         var eDialog = $uibModal.open({
              templateUrl: 'item.html',
              controller: 'editAdminModalCtrl',
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
              controller: 'deleteAdminModalCtrl',
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

      vm.formatDate = function (date) {
        return moment(date).format('DD-MMM-YYYY');
      };
                  
  })
.controller('addAdminModalCtrl', function ($scope, $uibModalInstance, Utility, Common, User) {
    var vm = this;
    var entity = 'admin';
    vm.title = 'Add New Admin';
    vm.actionName = 'Add Admin';
    vm.errorMessage = '';
    vm.isActive = true;
    vm.accountTypes = [{ name: 'System Administrator', id: 'System Administrator' }, { name: 'System Analyst', id: 'System Analyst' }, { name: 'Application Administrator', id: 'Application Administrator' }];
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.actionMethod = function () {
        if (isValidate()) {
            vm.isLoading = true;
            vm.errorMessage = '';
            var getImageResize = Utility.handleImageConversion(vm.addImage, 150, 100, 0);
            getImageResize.then(function (imgArray) {
                var nAdmin = {};
                nAdmin.Name = vm.name;
                nAdmin.Email = vm.email;
                nAdmin.Phone = vm.phone;
                nAdmin.Password = vm.password;
                nAdmin.Created = new Date();
                nAdmin.Status = 'Active';
                nAdmin.Type = vm.type.id;
                var currentUser =User.getCurrentUser();
                nAdmin.CreatedBy = Utility.isUndefinedOrNull(currentUser) ? 'unknown' : currentUser.name;                
                nAdmin.Icon = imgArray;
                nAdmin.isActive = vm.isActive;
                Common.add(entity, nAdmin)
                .then(function (res) {
                  nAdmin.Id = res;
                  console.log(nAdmin);
                    $uibModalInstance.close(nAdmin);
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
           Utility.isUndefinedOrNull(vm.phone) || Utility.isUndefinedOrNull(vm.addImage) ||
           Utility.isUndefinedOrNull(vm.email) ||
           Utility.isUndefinedOrNull(vm.password) ||
           Utility.isUndefinedOrNull(vm.type));
    }
    
})
.controller('editAdminModalCtrl', function ($scope, $uibModalInstance, Utility, Common, EditItem, User) {
    var vm = this;
    var entity = 'admin';
    vm.title = 'Edit Admin | ' + EditItem.Name;
    vm.actionName = 'Edit Admin';
    vm.errorMessage = '';
    vm.accountTypes = [{ name: 'System Administrator', id: 'System Administrator' }, { name: 'Analyst', id: 'Analyst' }, { name: 'Application Administrator', id: 'Application Administrator' }];
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.name = EditItem.Name;
    vm.address = EditItem.Address;
    vm.phone = EditItem.Phone;
    vm.email = EditItem.Email;
    vm.isActive = EditItem.IsActive;
    vm.type = EditItem.Type;
    vm.createdBy = EditItem.CreatedBy;
    vm.created = EditItem.Created;
    vm.uploadImage = "url('" + Utility.byteToImage(EditItem.Icon) + "')";
    vm.addImage = EditItem.Icon;

    vm.actionMethod = function () {
        if (isValidate()) {
            vm.isLoading = true;
            vm.errorMessage = '';
            var getImageResize = Utility.handleImageConversion(vm.addImage, 150, 100, 0);
            getImageResize.then(function (imgArray) {
                var nAdmin = {};
                nAdmin.Name = vm.name;
                nAdmin.Email = vm.email;
                nAdmin.Phone = vm.phone;
                nAdmin.Password = vm.password;
                nAdmin.Created = EditItem.Created;
                nAdmin.Status = 'Active';
                nAdmin.Type = vm.type.id;
                nAdmin.CreatedBy = vm.createdBy;
                nAdmin.Id = EditItem.Id;
                nAdmin.ActivationCode = EditItem.ActivationCode;
                nAdmin.Icon = imgArray;
                nAdmin.IsActive = vm.isActive;
                Common.edit(entity, nAdmin)
                .then(function () {
                    $uibModalInstance.close(nAdmin);
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
         Utility.isUndefinedOrNull(vm.phone) || Utility.isUndefinedOrNull(vm.addImage) ||
         Utility.isUndefinedOrNull(vm.email) ||
         Utility.isUndefinedOrNull(vm.password) ||
         Utility.isUndefinedOrNull(vm.type));
    }

})
.controller('deleteAdminModalCtrl', function ($scope, $uibModalInstance, Common, DeleteItem) {
    var vm = this;
    var entity = 'admin';
    vm.title = 'Delete Admin | ' + DeleteItem.Name;
    vm.actionName = 'Delete Admin';
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