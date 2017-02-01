'use strict';

angular.module('fundrikaApp')
    .factory('User', function () {
        var currentUser = null;
        function setCurrentUser(user) {
            currentUser = user;
            sessionStorage.user = angular.toJson(user);
        }
        function getCurrentUser() {
            currentUser = angular.fromJson(sessionStorage.user);
            if (angular.isUndefined(currentUser)) {
                currentUser = null;
            }
            return currentUser;
        }
        return {
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            currentUser: currentUser
        };

});