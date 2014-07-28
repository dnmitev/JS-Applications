/**
 * Created by Dimitar on 28.7.2014 г..
 */
(function () {
    "use strict";

    require.config({
        paths: {
            'jquery': '../node_modules/jquery/dist/cdn/jquery-2.1.1',
            'underscore': '../node_modules/underscore/underscore',
            'mocha': '../node_modules/mocha/mocha',
            'chai': '../node_modules/chai/chai',
            'sum': 'sum'
        }
    });

    require(['jquery', 'sum'], function ($, sum) {
        $('body').append('h1')
            .html(sum.sum([1, 2, 3]));
    });
}());
