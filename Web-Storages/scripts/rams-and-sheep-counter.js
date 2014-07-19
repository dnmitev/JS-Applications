define(function () {
    "use strict";

    var countSheepAndRam = function (number, playerNumber) {
        var rams = 0,
            sheep = 0,
            currentNumber,
            i,
            j;

        number = number.toString();
        playerNumber = playerNumber.toString();

        for (i = 0; i < number.length; i += 1) {
            currentNumber = playerNumber[i];

            if (currentNumber === number[i]) {
                rams += 1;
                continue;
            }

            for (j = 0; j < playerNumber.length; j += 1) {
                if (i !== j) {
                    if (currentNumber === number[j]) {
                        sheep += 1;
                        break;
                    }
                }
            }
        }

        return {
            rams: rams,
            sheep: sheep
        };
    };

    return countSheepAndRam;
});