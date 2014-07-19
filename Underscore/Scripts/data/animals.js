/// <reference path="../_references.js" />
define(function () {
    "use strict";
    var animals = [],
        numberOfLegs = {
            two: 2,
            four: 4,
            six: 6,
            eight: 8,
            hundred: 100
        },
        species = {
            mammal: 'mammals',
            predator: 'predators',
            insect: 'insects',
            reptile: 'reptiles',
            bird: 'birds',
            kovra: 'kovra'
        }


    animals = [{
        species: species.kovra,
        type: 'folk-tochilka',
        legs: numberOfLegs.two
    }, {
        species: species.mammal,
        type: 'cow',
        legs: numberOfLegs.four
    }, {
        species: species.predator,
        type: 'lion',
        legs: numberOfLegs.four
    }, {
        species: species.reptile,
        type: 'crocodile',
        legs: numberOfLegs.four
    }, {
        species: species.kovra,
        type: 'mursha',
        legs: numberOfLegs.two
    }, {
        species: species.insect,
        type: 'spider',
        legs: numberOfLegs.eight
    }, {
        species: species.insect,
        type: 'centipede',
        legs: numberOfLegs.hundred
    }, {
        species: species.insect,
        type: 'spider',
        legs: numberOfLegs.eight
    }, {
        species: species.bird,
        type: 'eagle',
        legs: numberOfLegs.two
    }, {
        species: species.mammal,
        type: 'dog',
        legs: numberOfLegs.four
    }, {
        species: species.insect,
        type: 'bee',
        legs: numberOfLegs.six
    }, {
        species: species.predator,
        type: 'tiger',
        legs: numberOfLegs.four
    }, {
        species: species.bird,
        type: 'kiwi',
        legs: numberOfLegs.two
    }];

    return animals;
});