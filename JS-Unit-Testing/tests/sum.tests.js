/**
 * Created by Dimitar on 28.7.2014 г..
 */
(function () {
    describe('#sum', function () {
        it('when array [1, 2, 3] should return 6', function () {
            require(['sum', function () {
                var actual = sum([1, 2, 3]),
                    expected = 0;

                expect(actual).to.equal(expected);
            }]);
        });
    });
}());
