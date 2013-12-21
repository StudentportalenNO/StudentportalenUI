angular.module('stpApp')
    .constant('pageViewDirectoryFactory', function pageViewDirectoryFactory(pageName, state, viewName) {
        return 'pages/' + pageName + '/' + (state || 'index') + '/views/' + (viewName || state || 'index') + '.html';
    });
