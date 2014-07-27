/// <reference path="../scripts/_references.js" />
define(['modules'], function (modules) {
    "use strict";

    var url = modules.config.apiURL + 'students/';

    function deleteStudent(id) {
        modules.request.postJSON(url + id, { _method: 'delete' }, null)
            .then(function () {
                modules.redirect('#/');
            });
    }

    return {
        deleteStudentById: deleteStudent
    };
});