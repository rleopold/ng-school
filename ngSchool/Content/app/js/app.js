'use strict';


// Declare app level module which depends on filters, and services
angular.module('ngSchool', [
  'ngRoute',
  'ngSchool.filters',
  'ngSchool.services',
  'ngSchool.directives',
  'ngSchool.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teachers', {templateUrl: 'Content/app/partials/teachers.html', controller: 'TeachersCtrl'});
  $routeProvider.when('/students', { templateUrl: 'Content/app/partials/students.html', controller: 'StudentsCtrl' });
  $routeProvider.when('/classes', { templateUrl: 'Content/app/partials/classes.html', controller: 'ClassesCtrl' });
  $routeProvider.when('/home', { templateUrl: 'Content/app/partials/home.html', controller: 'HomeCtrl' });
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
