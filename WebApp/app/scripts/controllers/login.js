'use strict';

angular.module('fundrikaApp')
.controller('loginCtrl', function ($location, User, $scope, Auth) {
    var vm = this;
    initiatePage();

    vm.login = function () {
        Auth.login(vm.account).then(function (data) {
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
    };
});