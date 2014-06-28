'use strict';

/* Controllers */

angular.module('ngSchool.controllers', [])

    .controller('TeachersCtrl', ['$scope', '$http', 'notificationFactory', 'teacherService', function ($scope, $http, notificationFactory, teacherService) {

        teacherService.getTeachers()
            .success(function (data) {
            $scope.teachers = data;
        });

        $scope.addTeacher = function () {
            teacherService.insertTeacher($scope.newTeacher)
			.success(function (data) {
			    $scope.teachers.push(data);
			    notificationFactory.success('Saved new Teacher');
			    $scope.showAdd = false;
			})
            .error(function (data) {
                notificationFactory.error('Failed to create Teacher');
            });
        }

        $scope.deleteTeacher = function (idx) {
            var teacher = $scope.teachers[idx];
            teacherService.deleteTeacher(teacher.Id)
            .success(function (data) {
                $scope.teachers.splice(idx, 1);
                notificationFactory.success('Deleted Teacher');
            })
            .error(function (data) {
                notificationFactory.error('Delete Teacher Failed')
            });
        }

        $scope.clickAdd = function () {
            $scope.showAdd = !$scope.showAdd;
        }

        $scope.newTeacher = {};
        $scope.showAdd = false;
    }])

    .controller('StudentsCtrl', ['$scope', '$http', 'notificationFactory', 'studentService',
        function ($scope, $http, notificationFactory, studentService) {

        studentService.getStudents().success(function (data) {
            $scope.students = data;
        });

        $scope.addStudent = function () {
            studentService.insertStudent($scope.newStudent)
			.success(function (data) {
			    $scope.students.push(data);
			    notificationFactory.success('Saved new student');
			    $scope.showAdd = false;
			})
            .error(function (data) {
                notificationFactory.error('Failed to create student');
            });
        }

        $scope.deleteStudent = function (idx) {
            var student = $scope.students[idx];
            studentService.deleteStudent(student.Id)
            .success(function (data) {
                $scope.students.splice(idx, 1);
                notificationFactory.success('Deleted student');
            })
            .error(function (data) {
                notificationFactory.error('Delete student Failed')
            });
        }

        $scope.clickAdd = function () {
            $scope.showAdd = !$scope.showAdd;
        }

        $scope.newStudent = {};
        $scope.showAdd = false;
    }])

    .controller('ClassesCtrl', ['$scope', '$http', 'notificationFactory', 'classService', 'teacherService',
        function ($scope, $http, notificationFactory, classService, teacherService) {

        classService.getClasses().success(function (data) {
            $scope.classes = data;
        });

        teacherService.getTeachers().success(function (data) {
            $scope.teachers = data;
        });

        $scope.addClass = function () {
            classService.insertClass($scope.newClass)
			.success(function (data) {
			    $scope.classes.push(data);
			    notificationFactory.success('Saved new class');
			    $scope.showAdd = false;
			    $scope.newClass = {};
			})
            .error(function (data) {
                notificationFactory.error('Failed to create class');
            });
        }

        $scope.deleteClass = function (idx) {
            var c = $scope.classes[idx];
            classService.deleteClass(c.Id)
            .success(function (data) {
                $scope.classes.splice(idx, 1);
                notificationFactory.success('Deleted class');
            })
            .error(function (data) {
                notificationFactory.error('Delete class Failed')
            });
        }

        $scope.clickAdd = function () {
            $scope.showAdd = !$scope.showAdd;
        }

        $scope.newClass = {};
        $scope.showAdd = false;
    }])

    .controller('HomeCtrl', ['$scope', '$http', 'notificationFactory', function ($scope, $http, notificationFactory) {

    }]);
