/// <reference path="../scripts/_references.js" />
define(['jquery', 'modules'], function ($, modules) {
    "use strict";

    var url = modules.config.apiURL;

    function sendMessage() {
        modules.view.load('messenger')
            .then(function () {
                $('#send-btn').on('click', function () {
                    var chatMessage = {
                        user: $('#nickname').val(),
                        text: $('#message').val()
                    };

                    modules.request.postJSON(url, chatMessage)

                    $('p').html('Your message has been sent');

                    setTimeout(function () {
                        modules.redirect('#/chat');
                    }, 1500);
                });
            });
    }

    return {
        send: sendMessage
    };
});