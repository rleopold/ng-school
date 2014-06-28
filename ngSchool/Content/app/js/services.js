'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var app = angular.module('ngSchool.services', []).
  value('version', '0.1');

app.factory('notificationFactory', function () {

    return {
        success: function (text) {
            toastr.success(text);
        },
        error: function (text) {
            toastr.error(text, "Error!");
        }
    };
});

app.service('teacherService', ['$http', function ($http) {

    var url = 'api/teachers'; //REST endpoint for this data type

    this.getTeachers = function () {
        return $http.get(url);
    }

    this.getTeacher = function (id) {
        return $http.get(url + '/' + id);
    }

    this.deleteTeacher = function (id) {
        return $http.delete(url + '/' + id);
    }

    this.insertTeacher = function (data) {
        return $http.post(url, data);
    }

    this.updateTeacher = function (data, id) {
        return $http.put(url + '/' + id, data);
    }

}]);

app.service('studentService', ['$http', function ($http) {

    var url = 'api/students'; //REST endpoint for this data type

    this.getStudents = function () {
        return $http.get(url);
    }

    this.getStudent = function (id) {
        return $http.get(url + '/' + id);
    }

    this.deleteStudent = function (id) {
        return $http.delete(url + '/' + id);
    }

    this.insertStudent = function (data) {
        return $http.post(url, data);
    }

    this.updateStudent = function (data, id) {
        return $http.put(url + '/' + id, data);
    }

}]);

app.service('classService', ['$http', function ($http) {

    var url = 'api/classes'; //REST endpoint for this data type

    this.getClasses = function () {
        return $http.get(url);
    }

    this.getClass = function (id) {
        return $http.get(url + '/' + id);
    }

    this.deleteClass = function (id) {
        return $http.delete(url + '/' + id);
    }

    this.insertClass = function (data) {
        return $http.post(url, data);
    }

    this.updateClass = function (data, id) {
        return $http.put(url + '/' + id, data);
    }

}]);