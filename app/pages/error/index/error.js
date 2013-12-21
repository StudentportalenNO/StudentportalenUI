'use strict';

angular.module('stpApp')
    .config(function ($stateProvider, stateFactoryProvider) { $stateProvider.state('Error', stateFactoryProvider.$get()('Error', {url:'/error?code'})) })
    .service('ErrorCtrlInit', function ($q, $log) {

        var _prepare = function () {
            $log.log("ErrorCtrl loading");

            return $q.all([]).then(function (response) {
                $log.log("ErrorCtrl loaded!");

                return {
                }
            });
        };

        return {
            prepare: _prepare
        }

    })
    .controller('ErrorCtrl', function ($scope, init, $stateParams) {
        $scope.data = init;
        $scope.errorCode = $stateParams.code;
    });
