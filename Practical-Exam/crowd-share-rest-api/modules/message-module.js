/// <reference path="../scripts/_references.js" />
define(['requester','config'], function (requester,config) {
    "use strict";

    var url = config.apiURL + 'post';

    function getAllPosts() {
        return requester.getJSON(url);
    }

    function sendPost(postTitle, postBody) {
        var data = {
            title: postTitle,
            body: postBody
        };

        return requester.postJSON(url, modules.storager.get('sessionKey'), data);
    }

    function getPostByPattern(text, user) {
        if (!text && !user) {
            return requester.getJSON(url);
        }

        var newUrl = '';

        if (!text && user) {
            newUrl = config.apiURL + "post/?user=" + user;
        } else if (text && !user) {
            newUrl = config.apiURL + "post/?pattern=" + text
        } else {
            newUrl =config.apiURL + "post/?pattern=" + text + "&user=" + user;
        }

        return requester.getJSON(newUrl);
    }

    return {
        getAllPosts: getAllPosts,
        sendPost: sendPost,
        getPostsByPattern: getPostByPattern
    };
});