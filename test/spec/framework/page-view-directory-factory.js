'use strict';

describe('pageViewDirectoryFactory', function () {

    var pageViewDirectoryFactory;

    beforeEach(function () {

        module('stpApp');

        inject(function (_pageViewDirectoryFactory_) {
            pageViewDirectoryFactory = _pageViewDirectoryFactory_;
        });

    });

    it('should return a path', function () {
        expect(pageViewDirectoryFactory('example-page')).toEqual('pages/example-page/index/views/index.html');
        expect(pageViewDirectoryFactory('example-page', 'action')).toEqual('pages/example-page/action/views/action.html');
        expect(pageViewDirectoryFactory('example-page', 'action', 'view')).toEqual('pages/example-page/action/views/view.html');
    });

});