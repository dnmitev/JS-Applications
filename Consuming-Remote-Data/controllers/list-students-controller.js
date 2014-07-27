/// <reference path="../scripts/_references.js" />
define(['jquery', 'modules'], function ($, modules) {
    "use strict";

    var url = modules.config.apiURL + 'students';

    function listStudents() {
        modules.view.load('list-students')
            .then(function () {
                modules.request.getJSON(url)
                    .then(function (data) {
                        $('#students-container').executeTemplate(data.students);
                    });
            })
    }

    return {
        listStudents: listStudents
    };
});