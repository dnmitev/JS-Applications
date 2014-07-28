/// <reference path="../scripts/_references.js" />
define(['jquery', 'underscore', 'modules'], function ($, _, modules) {
    "use strict";

    var url = modules.config.apiURL;

    function getPostFromRemote() {
        modules.view.load('chat')
            .then(function () {
                modules.request.getJSON(url)
                    .then(function (data) {
                        // due to the enormous amount of spam only the last 20 messages are posted
                        // because doing the DOM is slow operation
                        // in future I may add paging and eventaully list all of the messages
                        var filtered = _.last(data, 20);
                        $('#posts-container').executeTemplate(filtered);
                    });
            });
    }

    return {
        getAllPosts: getPostFromRemote
    };
});