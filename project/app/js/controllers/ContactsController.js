'use strict';

exampleApplication
    .controller('ContactsController', [
        '$scope',
        function (
            $scope
        ) {
            var self = this;

            $scope.text = 'Contacts page!';
        }]);
