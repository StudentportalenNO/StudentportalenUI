'use strict';

var components = angular.module('stpApp.components', []);
angular.componentFactory.moduleDecorator(components);

var app = angular.module('stpApp', [
  'componentFactory',
  'stpApp.components',
  'ngAnimate',
  'xeditable',
  'ajoslin.promise-tracker',
  'cgBusy',
  'chieffancypants.loadingBar',
  'ui.router',
  'restangular'
]);
angular.componentFactory.moduleDecorator(app);