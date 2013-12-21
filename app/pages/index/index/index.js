'use strict';

angular.module('stpApp')
    .config(function ($stateProvider, stateFactoryProvider) {
        $stateProvider.state('Index', stateFactoryProvider.$get()('Index', {url:'/'}))
    })
    .service('IndexCtrlInit', function ($q, $log) {

        var _prepare = function () {
            $log.log("IndexCtrl loading");

            return $q.all(['Data from service 1', 'Data from service 2']).then(function (data) {
                $log.log("IndexCtrl loaded!");

                return {
                    message1: data[0],
                    message2: data[1]
                }
            });
        };

        return {
            prepare: _prepare
        }

    })
    .controller('IndexCtrl', function ($scope, init) {
        $scope.data = init;
    });
