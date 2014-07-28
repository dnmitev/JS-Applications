/// <reference path="_references.js" />
define(function () {
    "use strict";

    return {
        // main API URL
        apiURL: 'http://crowd-chat.herokuapp.com/posts',

        // main API HTML container
        mainCointainer: '#main-container',

        // path to partial HTML files
        templatesPath: '../SPA-Crowd-Chat-API/views/',

        //  path to controller APIs
        controllersPath: '../controllers/'
    };
});