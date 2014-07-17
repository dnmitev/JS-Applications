/// <reference path="_references.js" />
(function () {
    'use strict';

    require.config({
        paths: {
            underscore: 'libs/underscore',
            jquery: 'libs/jquery-2.1.1',
            hb: 'libs/handlebars',
            st: 'students',
            an: 'animals',
            b: 'books'
        }
    });

    require(['underscore', 'st', 'template'], function (_, students) {
        var sortedByFirstName = _.filter(students, function (st) {
            return st.firstName < st.lastName;
        });

        console.dir(sortedByFirstName);

        $('#students-list').template(sortedByFirstName);

    });
}());