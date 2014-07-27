/// <reference path="../scripts/_references.js" />
define(['jquery', 'modules'], function ($, modules) {
    "use strict";

    var student = {},
        url = modules.config.apiURL + 'students';

    function add() {
        modules.view.load('add-student')
            .then(function (data) {
                $('form').on('submit', function (ev) {
                    var $this = $(this),
                        name = $this.find('#student-name').val(),
                        grade = $this.find('#student-grade').val();

                    ev.preventDefault();

                    student.name = name;
                    student.grade = grade;

                    addStudent();
                });
            });
    }

    function addStudent() {
        modules.request.postJSON(url, student)
            .then(function (data) {
                modules.redirect('#/');
            }, function (err) {
                alert(err);
            });
    }

    return {
        addStudent: add
    };
});