
myApp = angular.module('bumbyApp', ["ngRoute"]);
myApp.controller('mainCtrl', ['$scope', function ($scope) {}]);
myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        template: '<item-list></item-list>'
    })
    .when('/items/:itemId', {
        template: '<item></item>'
    })
    .when('/svgtest', {
        template: '<svgtest></svgtest>'
    })
    .otherwise('/');
  });