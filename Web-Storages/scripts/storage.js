/// <reference path="_references.js" />
(define(['underscore'], function (_) {
    "use strict";

    var savePlayer,
        loadScore;

    savePlayer = function (username, count) {
        if (!(localStorage[username])) {
            localStorage.setItem(username, count);
        } else {
            console.log('username taken!');
            savePlayer(username, count);
        }
    };

    loadScore = function () {
        var players = [];

        for (var player in localStorage) {
            players.push({
                name: player,
                attempts: parseInt(localStorage[player])
            });
        }

        players = _.sortBy(players, 'attempts');

        return players;
    }

    return {
        save: savePlayer,
        load: loadScore
    };
}));