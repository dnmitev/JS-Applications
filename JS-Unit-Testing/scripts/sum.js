/**
 * Created by Dimitar on 28.7.2014 г..
 */
define(function () {
    "use strict";

    function sum(numbers) {
        var numbersSum, i, number, len;
        numbersSum = 0;
        for (i = 0, len = numbers.length; i < len; i += 1) {
            number = numbers[i];
            numbersSum += number;
        }
        return numbersSum;
    }

    return {
        sum: sum
    };
});
