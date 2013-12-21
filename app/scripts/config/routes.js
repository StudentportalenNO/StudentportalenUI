'use strict';

angular.module('stpApp')
    .config(function ($urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise("/error?code=404");
    });
