/// <reference path="_references.js" />
(function () {
    "use strict";

    require.config({
        urlArgs: "bust=" + (new Date()).getTime(),
        paths: {
            'jquery': '../libs/jquery-2.1.1',
            'mustache': '../libs/mustache',
            'q': '../libs/q',
            'requester': 'modules/http-requester',
            'templater': 'modules/template-engine',
            'tweets': 'modules/get-public-tweets'
        }
    });


    require(['jquery', 'tweets','templater'], function ($, Twitter) {
        $('#get-tweets-btn').on('click', function () {
            var name = $('#twitter-username').val(),
                count = $('#tweets-count').val();

            Twitter.getTweets(name, count)
                .then(function (data) {
                    data = JSON.parse(data);
                    console.dir(data);
                    $('#public-tweets').executeTemplate(data);
                });
        })
    });
}());