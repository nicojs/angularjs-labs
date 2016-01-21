'use strict';

/**
 * @ngdoc overview
 * @name angularjsLabsApp
 * @description
 * # angularjsLabsApp
 *
 * Main module of the application.
 */
angular
  .module('angularjsLabsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/helloWorld.html',
        controller: 'HelloWorldCtrl',
        controllerAs: 'main'
      });   
  });
