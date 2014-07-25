/// <reference path="_references.js" />
(function () {
    'use strict';

    require.config({
        paths: {
            'jquery': '../libs/jquery-2.1.1',
            'q': '../libs/q'
        }
    });

    require(['jquery'], function ($) {
        $('#field').html('bat mitko');
    });
}());