'use strict';

exampleApplication
    .config([
        'parameters',
        '$locationProvider',
        '$stateProvider',
        '$urlRouterProvider',
        function (parameters,
                  $locationProvider,
                  $stateProvider,
                  $urlRouterProvider) {

            $locationProvider.html5Mode(true);
            $locationProvider.hashPrefix('!');
            $urlRouterProvider.otherwise('/404');

            // homepage
            $stateProvider
                .state('homepage', {
                    url: '/',
                    controller: 'HomepageController',
                    templateUrl: 'pages/homepage.html'
                })
                .state('about', {
                    url: '/about',
                    controller: 'AboutController',
                    templateUrl: 'pages/about.html'
                })
                .state('contacts', {
                    url: '/contacts',
                    controller: 'ContactsController',
                    templateUrl: 'pages/contacts.html'
                });

            // 404 page
            $stateProvider
                .state('404', {
                    url: '/404',
                    templateUrl: 'pages/404.html'
                });
        }]);
