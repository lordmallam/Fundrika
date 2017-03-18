'use strict';

angular.module('fundrikaApp')
  .controller('adminCountryCtrl', function (Utility, $uibModal, $scope, Common, $location) {
      var entity = 'country';
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
           controller: 'addCountryModalCtrl',
              controllerAs: 'ctrl'
         });

         aDialog.result.then(function (addedItem) {
             vm.list.push(addedItem);
         });
      };


      vm.openEditDialog = function (item) {
         var eDialog = $uibModal.open({
              templateUrl: 'item.html',
              controller: 'editCountryModalCtrl',
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
              controller: 'deleteCountryModalCtrl',
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
.controller('addCountryModalCtrl', function ($scope, $uibModalInstance, Utility, Common) {
    var vm = this;
    var entity = 'country';
    vm.title = 'Add New Country';
    vm.actionName = 'Add Country';
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
                var nCountry = {};
                nCountry.Name = vm.name;
                nCountry.Currency = vm.currency;
                nCountry.URL = vm.url;
                nCountry.CurrencySymbol = vm.currencySymbol;
                nCountry.Icon = imgArray;
                Common.add(entity, nCountry)
                .then(function (res) {
                    nCountry.id = res;
                    $uibModalInstance.close(nCountry);
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
           Utility.isUndefinedOrNull(vm.currency) ||
           Utility.isUndefinedOrNull(vm.currencySymbol) || Utility.isUndefinedOrNull(vm.addImage));
    }
    
})
.controller('editCountryModalCtrl', function ($scope, $uibModalInstance, Utility, Common, EditItem) {
    var vm = this;
    var entity = 'country';
    vm.title = 'Edit Country | ' + EditItem.Name;
    vm.actionName = 'Edit Country';
    vm.errorMessage = '';
    vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    vm.name = EditItem.Name;
    vm.url = EditItem.URL;
    vm.currency = EditItem.Currency;
    vm.currencySymbol = EditItem.CurrencySymbol;
    vm.uploadImage = "url('" + Utility.byteToImage(EditItem.Icon) + "')";
    vm.addImage = EditItem.Icon;

    vm.actionMethod = function () {
        if (isValidate()) {
            vm.isLoading = true;
            vm.errorMessage = '';
            var getImageResize = Utility.handleImageConversion(vm.addImage, 150, 100, 0);
            getImageResize.then(function (imgArray) {
                var nCountry = {};
                nCountry.Name = vm.name;
                nCountry.Currency = vm.currency;
                nCountry.URL = vm.url;
                nCountry.CurrencySymbol = vm.currencySymbol;
                nCountry.Icon = imgArray;
                nCountry.Id = EditItem.Id;
                Common.edit(entity, nCountry)
                .then(function () {
                    $uibModalInstance.close(nCountry);
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
            Utility.isUndefinedOrNull(vm.currency) ||
            Utility.isUndefinedOrNull(vm.currencySymbol) || Utility.isUndefinedOrNull(vm.addImage));
    }

})
.controller('deleteCountryModalCtrl', function ($scope, $uibModalInstance, Common, DeleteItem) {
    var vm = this;
    var entity = 'country';
    vm.title = 'Delete Country | ' + DeleteItem.Name;
    vm.actionName = 'Delete Country';
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