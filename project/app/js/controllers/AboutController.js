'use strict';

exampleApplication
    .controller('AboutController', [
        '$scope',
        function (
            $scope
        ) {
            var self = this;

            $scope.text = 'About page!';
        }]);
