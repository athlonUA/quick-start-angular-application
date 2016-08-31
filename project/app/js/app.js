'use strict';

var exampleApplication = angular.module('exampleApplication', [
        'ui.router',
        'ui.router.util',
        'ui.router.compat',
        'app.config'
    ])

    .config([
        function () {
            // some config here
        }
    ]);
