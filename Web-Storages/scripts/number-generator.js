/// <reference path="_references.js" />
define(function () {
    var getRandomNumber = function () {
        return Math.floor(Math.random() * 9000) + 1000;
    };

    return getRandomNumber;
});