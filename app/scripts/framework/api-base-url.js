angular.module('stpApp').factory('APIBaseUrl', function (Config) {
    return (Config.API.protocol + '://' + Config.API.host + ':' + Config.API.port + Config.API.path + '/');
});