'use strict';

var configData = {
    'parameters': {
        'parameter' : 'value'
    }
};

var configModule = angular.module('app.config', []);
angular.forEach(configData, function (key, value) {
    configModule.constant(value, key);
});
