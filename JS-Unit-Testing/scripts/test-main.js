(function () {
    "use strict";

    require.config({
        paths: {
            'mocha': '../node_modules/mocha/mocha',
            'chai': '../node_modules/chai/chai'
        }
    });

    require(['../node_modules/chai/chai','mocha'], function (chai) {
        mocha.setup('bdd');
        var expect = chai.expect;

        require(['../tests/sum.tests'], function () {
            mocha.run();
        });
    });
}());
