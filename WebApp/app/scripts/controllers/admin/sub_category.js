'use strict';

angular.module('fundrikaApp')
  .controller('adminSubCategoryCtrl', function (Category, Utility, $uibModal, $scope, Common, $q) {
      var entity = 'subcategory';
      var parentEntity = 'category';
      var vm = this;
      vm.hasError = false;
      vm.currentPage = 1;
      vm.pageSize = 20;
      vm.sortByName = true;
      vm.sortByCat = true;
      vm.getImageFromByte = function (byte) {
          return Utility.byteToImage(byte);
      };
      vm.errorMessage = 'server connection error';
      var promises = [
          Common.all(parentEntity),
          Common.all(entity)          
      ];

      $q.all(promises).then(function (data) {
          vm.subCategoryList = data[1];
          vm.categoryList = data[0];
      }).catch(function (res) {
          vm.hasError = true;
          vm.errorMessage = res.data.Message;          
      });

      vm.openAddDialog = function (parentList) {
         var aDialog = $uibModal.open({
              templateUrl: 'item.html',
              controller: 'addModalCtrl',
              controllerAs: 'ctrl',
              resolve: {
                  ParentList: function () {
                      return _.map(parentList, function (item) {
                          return {
                              name: item.Name,
                              id: item.Id,
                              color: item.Color
                          };
                      });
                  }
              }
         });

         aDialog.result.then(function (addedItem) {
             vm.subCategoryList.push(addedItem);
         });
      };


      vm.openEditDialog = function (item, parentList) {
         var eDialog = $uibModal.open({
              templateUrl: 'item.html',
              controller: 'editModalCtrl',
              controllerAs: 'ctrl',
              resolve: {
                  ParentList: function () {
                      return _.map(parentList, function (item) {
                          return {
                              name: item.Name,
                              id: item.Id,
                              color: item.Color
                          };
                      });
                  },
                  EditItem: function () {
                      return item;
                  }
              }
         });

         eDialog.result.then(function (updatedItem) {
             for (var i = 0; i < vm.subCategoryList.length; i++) {
                 if (vm.subCategoryList[i].Id === updatedItem.Id) {
                     vm.subCategoryList[i] = updatedItem;
                     break;
                 }
             }
         });
      };

      vm.openDeleteDialog = function (item) {
          var dDialog = $uibModal.open({
              templateUrl: '../../views/admin/delete.html',
              controller: 'deleteModalCtrl',
              controllerAs: 'ctrl',
              resolve: {
                  DeleteItem: function () {
                      return item;
                  }
              }
          });

          dDialog.result.then(function (deletedItem) {
              for (var i = 0; i < vm.subCategoryList.length; i++) {
                  if (vm.subCategoryList[i].Id === deletedItem) {
                      vm.subCategoryList.splice(i, 1);
                      break;
                  }
              }
          });
      };

      vm.sortBy = function (propertyName) {
          if (propertyName === 'Name') {
              vm.isSorted = true;
              vm.isCatSorted = false;
          } else {
              vm.isCatSorted = true;
              vm.isSorted = false;
          }
          
          if (vm.sortByName) {
              vm.subCategoryList = Utility.orderByAsc(vm.subCategoryList, propertyName);
              vm.sortByName = !vm.sortByName;
          } else {
              vm.subCategoryList = Utility.orderByDesc(vm.subCategoryList, propertyName);
              vm.sortByName = !vm.sortByName;
          }
          
      };
                  
  })
.controller('addModalCtrl', function ($scope, $uibModalInstance, Utility, Common, ParentList) {
    var vm = this;
    var entity = 'subcategory';
    vm.title = 'Add New Sub Category';
    vm.actionName = 'Add Sub Category';
    vm.errorMessage = '';
    vm.parentColor = true;
    vm.categoryList = ParentList;
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
                nCategory.CategoryId = vm.selectedCategory.id;
                nCategory.CategoryName = vm.selectedCategory.name;
                Common.add(entity, nCategory)
                .then(function (res) {
                    nCategory.id = res;
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

    vm.parentColorChanged = function () {
        if (vm.parentColor && vm.selectedCategory) {
            vm.color = vm.selectedCategory.color;
        }
    };

    function isValidate() {
        return !(Utility.isUndefinedOrNull(vm.name) ||
            Utility.isUndefinedOrNull(vm.description) ||
            Utility.isUndefinedOrNull(vm.selectedCategory) ||
            Utility.isUndefinedOrNull(vm.color) || Utility.isUndefinedOrNull(vm.addImage));
    }
    
})
.controller('editModalCtrl', function ($scope, $uibModalInstance, Utility, Common, EditItem, ParentList) {
    var vm = this;
    var entity = 'subcategory';
    vm.title = 'Edit Sub Category | ' + EditItem.Name;
    vm.actionName = 'Edit Sub Category';
    vm.errorMessage = '';
    vm.categoryList = ParentList;
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.name = EditItem.Name;
    vm.description = EditItem.Description;
    vm.color = EditItem.Color;
    vm.selectedCategory = { name: EditItem.CategoryName, id: EditItem.CategoryId };
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
                nCategory.CategoryId = vm.selectedCategory.id;
                nCategory.CategoryName = vm.selectedCategory.name;
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
            Utility.isUndefinedOrNull(vm.selectedCategory) ||
            Utility.isUndefinedOrNull(vm.color) || Utility.isUndefinedOrNull(vm.addImage));
    }

})
.controller('deleteModalCtrl', function ($scope, $uibModalInstance, Common, DeleteItem) {
    var vm = this;
    var entity = 'subcategory';
    vm.title = 'Delete Sub Category | ' + DeleteItem.Name;
    vm.actionName = 'Delete Sub Category';
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