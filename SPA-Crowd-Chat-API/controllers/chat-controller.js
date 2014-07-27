/// <reference path="../scripts/_references.js" />
define(['jquery', 'modules'], function ($, modules) {
    "use strict";

    var url = modules.config.apiURL;

    function getPostFromRemote() {
        modules.view.load('chat')
            .then(function () {
                modules.request.getJSON(url)
                    .then(function (data) {
                        $('#posts-container').executeTemplate(data);
                    });
            });
    }

    return {
        getAllPosts: getPostFromRemote
    };
});