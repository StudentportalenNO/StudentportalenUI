angular.module('stpApp')
    .constant('dasherize', function (input) {
        return input
           .replace(/(?:[A-Z]+)/g, function (match) { //camelCase -> snake-case
               return "-" + match.toLowerCase();
           })
           .replace(/^-/, ''); // CamelCase -> -snake-case -> snake-case
    });