/// <reference path="_references.js" />
(function () {
    'use strict';

    require.config({
        // stop caching js files
        //urlArgs: "bust=" + (new Date()).getTime(),
        waitSeconds: 10,
        paths: {
            // libs
            'jquery': '../libs/jquery-2.1.1',
            'q': '../libs/q',
            'mustache': '../libs/mustache',
            'sammy': '../libs/sammy-0.7.4',
            'underscore': '../libs/underscore',

            // modules
            'requester': '../modules/http-requester',
            'templater': '../modules/template-engine',
            'view': '../modules/view-loader',

            // controllers
            'add-student': '../controllers/add-student-controller',
            'list-students': '../controllers/list-students-controller',
            'delete-student': '../controllers/delete-student-controller',

            // apps
            'modules': 'module-loader',
            'config': 'config'
        }
    });

    require(['jquery'], function () {
        require(['sammy', 'config', 'view', 'templater'], function (sammy, config, view) {
            var app = sammy(config.mainCointainer, function () {
                this.get('#/', function () {
                    view.load('home');
                })

                this.get('#/students', function () {
                    require(['list-students'], function (file) {
                        file.listStudents();
                    });
                });

                this.get('#/add', function () {
                    require(['add-student'], function (file) {
                        file.addStudent();
                    });
                });

                this.get('#/delete/:id', function () {
                    var id = this.params['id'];

                    require(['delete-student'], function (file) {
                        file.deleteStudentById(id);
                    });
                });
            });

            app.run('#/');
        });
    });
}());