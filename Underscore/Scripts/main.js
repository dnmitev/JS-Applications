/// <reference path="_references.js" />
(function () {
    'use strict';

    require.config({
        paths: {
            underscore: 'libs/underscore',
            st: 'data/students',
            an: 'data/animals',
            b: 'data/books'
        }
    });

    require(['underscore', 'st'], function (_, students) {
        var sortedByFirstName = _.chain(students)
                .filter(function (st) {
                    return st.firstName < st.lastName;
                })
                .sortBy(function (st) {
                    return st.firstName + st.lastName + st.age;
                })
                .reverse();

        console.log('01. Students whose first name is before their last name, alphabetically, sorted descending by full name and age');
        console.dir(sortedByFirstName._wrapped);
        console.log('#######################################################################################');
    });

    require(['underscore', 'st'], function (_, students) {
        var studentsAgeRangeFullName = [];

        _.each(students, function (st) {
            if (18 <= st.age && st.age <= 24) {
                studentsAgeRangeFullName.push(st.firstName + ' ' + st.lastName + ' ' + 'age:' + st.age);
            }
        });

        console.log('02. Students between 18 and 24 full name');
        console.dir(studentsAgeRangeFullName);
        console.log('#######################################################################################');
    });

    require(['underscore', 'st'], function (_, students) {
        var studentsByOverallScore = _.map(students, function (st) {
            var overallScore = 0,
                marksCount = _.size(st.marks);

            _.each(st.marks, function (m) {
                overallScore += parseFloat(m);
            });

            overallScore = (overallScore / marksCount).toFixed(2);

            _.extend(st, {
                overallScore: overallScore
            });

            return st;
        });

        studentsByOverallScore = _.chain(students)
            .sortBy('overallScore')
            .reverse();


        console.log('03. Student with high overall score:');
        console.dir(studentsByOverallScore._wrapped);
        console.log('Student with highest marks is:');
        console.dir(_.first(studentsByOverallScore._wrapped));
        console.log('#######################################################################################');
    });

    require(['underscore', 'an'], function (_, animals) {
        var groupedBySpecies = _.chain(animals)
            .sortBy(function (a) {
                return a.legs;
            })
            .groupBy(function (a) {
                return a.species;
            });

        console.log('04. Animals grouped by species and sorted by number of legs:');
        console.dir(groupedBySpecies._wrapped);
        console.log('#######################################################################################');
    });

    require(['underscore', 'an'], function (_, animals) {
        var totalNumberOfLegs = 0;

        _.each(animals, function (a) {
            totalNumberOfLegs += a.legs;
        });

        console.log('Total number of legs: ' + totalNumberOfLegs);
        console.log('#######################################################################################');
    });

    require(['underscore', 'b'], function (_, books) {
        var mostPopularAuthor = _.chain(books)
            .countBy(function (b) {
                return b.author;
            })
            .pairs()
            .first();

        console.log('Most popular author: ' + mostPopularAuthor._wrapped[0]);
        console.log('#######################################################################################');
    });

    require(['underscore', 'st'], function (_, students) {
        var indexFirstName,
            indexLastName,
            mostPopularFirstName = _.countBy(students, 'firstName'),
            mostPopularLastName = _.countBy(students, 'lastName');

        indexFirstName = _.max(mostPopularFirstName);
        mostPopularFirstName = _.invert(mostPopularFirstName);

        indexLastName = _.max(mostPopularLastName);
        mostPopularLastName = _.invert(mostPopularLastName);

        console.log('Most popular first name is: ' + mostPopularFirstName[indexFirstName]);
        console.log('Most popular last name is: ' + mostPopularLastName[indexLastName]);
        console.log('#######################################################################################');
    });
}());