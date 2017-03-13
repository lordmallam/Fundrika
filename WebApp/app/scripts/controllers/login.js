'use strict';

angular.module('fundrikaApp')
.controller('loginCtrl', function ($location, User, $scope, Auth) {
    var vm = this;
    vm.login = function () {
        Auth.login(vm.account).then(function () {
            $location.path('/');
        }, function (err) {
            vm.message = err.error_description;

        });
    };

    function initiatePage() {
        vm.message = '';
        vm.account = {
            username: '',
            password: ''
        };
        Auth.logout();
    }

    initiatePage();
});