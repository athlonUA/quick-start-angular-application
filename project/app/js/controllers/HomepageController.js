'use strict';

exampleApplication
    .controller('HomepageController', [
        '$scope',
        function (
            $scope
        ) {
            var self = this;

            $scope.text = 'Homepage!';
        }]);
