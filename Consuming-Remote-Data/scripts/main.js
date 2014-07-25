/// <reference path="../bower_components/q/q.js" />
/// <reference path="../bower_components/jquery/src/jquery.js" />
(function () {
    "use strict";

    require.config({
        paths: {
            'jquery': '../bower_components/jquery/src/jquery',
            'q': '../bower_components/q/q',
            'req': 'http-requester'
        }
    });

    require(['jquery'],function(){
        $('#field').html('bat mitko');
    })
}());
