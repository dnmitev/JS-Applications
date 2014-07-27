/// <reference path="../_references.js" />
define(['requester'], function (requester) {
    "use strict";

    var url = 'http://localhost:3000/tweets';

    function getTweets(username, count) {
        count = count ? parseInt(count) : 10;

        var data = {
            consumerKey: 'xFcIoxA9ryWeVY19odaX82lVy',
            consumerSecret: '5ryzGIJwK4b7QnFMP9jjbVhRCdKeoi9yG1o1AcUlIx9eCX9LTp',
            accessToken: '2675042322-5Bzi0f6OqIXuCmDUMXv0DuN2LVCzRbwnGb73tKB',
            accessTokenSecret: 'rY5lLar2hCLg38ANfjvAO0T7hCYDx0QsFPIp6u5Up5kfJ',
            username: username,
            count: count
        };

        return requester.postJSON(url, data);
    }

    return {
        getTweets: getTweets
    };
});