'use strict';

describe('Controller: ErrorCtrl', function () {

    var ErrorCtrl, scope;

    beforeEach(function () {

        module('stpApp', function ($provide) {
            $provide.value('$stateParams', {code:1337});
        });

        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            ErrorCtrl = $controller('ErrorCtrl', {
                $scope: scope,
                init: 'DATA'
            });
        });
    });

    it('should attach init data to scope', function () {
        expect(scope.data).toEqual('DATA');
    });

    it('should attach error code', function() {
        expect(scope.errorCode).toEqual(1337);
    });
});

describe('Service: ErrorCtrlInit', function () {

    var ErrorCtrlInit;

    beforeEach(function () {

        module('stpApp');

        inject(function (_ErrorCtrlInit_) {
            ErrorCtrlInit = _ErrorCtrlInit_;
        });

    });


    it('should have a prepare function', function () {
        expect(typeof ErrorCtrlInit.prepare).toEqual('function');
    });

});