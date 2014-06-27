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