'use strict';

angular.module('fundrikaApp')
  .controller('adminCategoryCtrl', function (Utility, $uibModal, $scope, Common, $location) {
      var entity = 'category';
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
          vm.categoryList = data;
      }).catch(function (res) {
          vm.hasError = true;
          vm.errorMessage = res.data.Message;          
      });

      vm.openAddDialog = function () {
         var aDialog = $uibModal.open({
              templateUrl: 'item.html',
              controller: 'addCategoryModalCtrl',
              controllerAs: 'ctrl'
         });

         aDialog.result.then(function (addedItem) {
             vm.categoryList.push(addedItem);
         });
      };


      vm.openEditDialog = function (item) {
         var eDialog = $uibModal.open({
              templateUrl: 'item.html',
              controller: 'editCategoryModalCtrl',
              controllerAs: 'ctrl',
              resolve: {
                  EditItem: function () {
                      return item;
                  }
              }
         });

         eDialog.result.then(function (updatedItem) {
             for (var i = 0; i < vm.categoryList.length; i++) {
                 if (vm.categoryList[i].Id === updatedItem.Id) {
                     vm.categoryList[i] = updatedItem;
                     break;
                 }
             }
         });
      };

      vm.openDeleteDialog = function (item) {
          var dDialog = $uibModal.open({
              templateUrl: '../../views/admin/delete.html',
              controller: 'deleteCategoryModalCtrl',
              controllerAs: 'ctrl',
              resolve: {
                  DeleteItem: function () {
                      return item;
                  }
              }
          });

          dDialog.result.then(function (deletedItem) {
              for (var i = 0; i < vm.categoryList.length; i++) {
                  if (vm.categoryList[i].Id === deletedItem) {
                      vm.categoryList.splice(i, 1);
                      break;
                  }
              }
          });
      };

      vm.sortBy = function (propertyName) {
          vm.isSorted = true;
          if (vm.sortByName) {
              vm.categoryList = Utility.orderByAsc(vm.categoryList, propertyName);
              vm.sortByName = !vm.sortByName;
          } else {
              vm.categoryList = Utility.orderByDesc(vm.categoryList, propertyName);
              vm.sortByName = !vm.sortByName;
          }
          
      };

      vm.redirect = function(id) {
          $location.url('/admin/sub-category/' + id)
      };
                  
  })
.controller('addCategoryModalCtrl', function ($scope, $uibModalInstance, Utility, Common) {
    var vm = this;
    var entity = 'category';
    vm.title = 'Add New Category';
    vm.actionName = 'Add Category';
    vm.errorMessage = '';
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.actionMethod = function () {
        if (isValidate()) {
            vm.isLoading = true;
            vm.errorMessage = '';
            var getImageResize = Utility.handleImageConversion(vm.addImage, 800, 300, 0);
            getImageResize.then(function (imgArray) {
                var nCategory = {};
                nCategory.Name = vm.name;
                nCategory.Description = vm.description;
                nCategory.Color = vm.color;
                nCategory.Icon = imgArray;
                Common.add(entity, nCategory)
                .then(function (res) {
                    nCategory.Id = res;
                    $uibModalInstance.close(nCategory);
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

    vm.getRandomColor = function () {
        vm.color = Utility.randomColor();
    };

    function isValidate() {
        return !(Utility.isUndefinedOrNull(vm.name) ||
            Utility.isUndefinedOrNull(vm.description) ||
            Utility.isUndefinedOrNull(vm.color) || Utility.isUndefinedOrNull(vm.addImage));
    }
    
})
.controller('editCategoryModalCtrl', function ($scope, $uibModalInstance, Utility, Common, EditItem) {
    var vm = this;
    var entity = 'category';
    vm.title = 'Edit Category | ' + EditItem.Name;
    vm.actionName = 'Edit Category';
    vm.errorMessage = '';
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.name = EditItem.Name;
    vm.description = EditItem.Description;
    vm.color = EditItem.Color;
    vm.uploadImage = "url('" + Utility.byteToImage(EditItem.Icon) + "')";
    vm.addImage = EditItem.Icon;

    vm.actionMethod = function () {
        if (isValidate()) {
            vm.isLoading = true;
            vm.errorMessage = '';
            var getImageResize = Utility.handleImageConversion(vm.addImage, 800, 300, 0);
            getImageResize.then(function (imgArray) {
                var nCategory = {};
                nCategory.Name = vm.name;
                nCategory.Description = vm.description;
                nCategory.Color = vm.color;
                nCategory.Icon = imgArray;
                nCategory.Id = EditItem.Id;
                Common.edit(entity, nCategory)
                .then(function () {
                    $uibModalInstance.close(nCategory);
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

    vm.getRandomColor = function () {
        vm.color = Utility.randomColor();
    };

    function isValidate() {
        return !(Utility.isUndefinedOrNull(vm.name) ||
            Utility.isUndefinedOrNull(vm.description) ||
            Utility.isUndefinedOrNull(vm.color) || Utility.isUndefinedOrNull(vm.addImage));
    }

})
.controller('deleteCategoryModalCtrl', function ($scope, $uibModalInstance, Common, DeleteItem) {
    var vm = this;
    var entity = 'category';
    vm.title = 'Delete Category | ' + DeleteItem.Name;
    vm.actionName = 'Delete Category';
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