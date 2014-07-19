/// <reference path="_references.js" />
(function () {

    require.config({
        paths: {
            'jquery': 'libs/jquery-2.1.1',
            'underscore': 'libs/underscore',
            'handlebars': 'libs/handlebars',
            'generator': 'number-generator',
            'counter': 'rams-and-sheep-counter'
        }
    });

    require(['jquery', 'generator', 'counter', 'storage'], function ($, getRandomNumber, countSheepAndRam, storage) {
        "use strict";

        var number = number || getRandomNumber(),
            username,
            tries = tries || 0;

        $('#player-data').hide();

        console.log(number);

        $('#game-board').on('click', '#try-btn', function () {
            var $this = $(this),
                input = $this.parent().find('#number-input').val(),
                isValidInput,
                sheepAndRams;

            isValidInput = function (input) {
                if (!input) {
                    return false;
                } else if (typeof (input - 0) !== 'number') {
                    return false;
                } else if ((input + '').length !== 4) {
                    return false;
                } else if (parseInt(input / 1000) === 0) {
                    return false;
                }

                return true;
            };

            if (isValidInput(input)) {
                $('#number-input').css('border', '1px solid yellowgreen')
                                    .css('color', 'yellowgreen');

                sheepAndRams = countSheepAndRam(number, input);
                tries += 1;

                if (sheepAndRams.rams === 4) {
                    $('#player-data').show();

                    $('#player-data').on('click', '#save-player-btn', function () {
                        username = $('#player-data').find('#name-input').val();
                        storage.save(username, tries);
                        location.reload(); // refresh page
                    });

                    console.log(username);
                } else {
                    $('#sheep').html(sheepAndRams.sheep);
                    $('#rams').html(sheepAndRams.rams);
                }
            } else {
                $('#number-input').css('border', '3px solid red')
                                    .css('color', 'red');
            }
        });
    });

    require(['jquery', 'storage', 'template'], function ($, storage, template) {
        var players = storage.load();
        $('#score-list').template(players);
    })
}());