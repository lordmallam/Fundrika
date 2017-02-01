'use strict';

angular.module('fundrikaApp')
.controller('loginCtrl', function ($location, User, $scope, Auth) {
    var vm = this;
    vm.message = '';
    vm.account = {
        username: '',
        password:''
    };
    vm.login = function () {
        Auth.login(vm.account).then(function () {
            $location.path('/');
        }, function (err) {
            vm.message = err.error_description;

        });
    };
});