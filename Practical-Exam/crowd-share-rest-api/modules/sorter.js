/// <reference path="../scripts/_references.js" />
define(['underscore'], function (_) {
    "use strict";

    var getElementsByCount = function (posts, count) {
        return _.last(posts, count);
    }

    var getElementsByTitle = function (posts) {
        return _.sortBy(posts, function (post) {
            return post.title.toLowerCase();
        });
    }

    var getElementsByDate = function (posts) {
        return _.sortBy(posts, 'postDate');
    }

    return {
        getPostsByCount: getElementsByCount,
        getPostsByTitle: getElementsByTitle,
        getPostsByDate: getElementsByDate
    }
});