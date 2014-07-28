/// <reference path="_references.js" />
(function () {
    'use strict';

    require.config({
        // stop caching js files
        // urlArgs: "bust=" + (new Date()).getTime(),
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
            'chat': '../controllers/chat-controller',
            'sender': '../controllers/send-controller',

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
                });

                this.get('#/chat', function () {
                    require(['chat'], function (file) {
                        file.getAllPosts();
                    });
                });

                 this.get('#/send', function () {
                    require(['sender'], function (file) {
                        file.send();
                    });
                });
            });

            app.run('#/');
        });
    });
}());