"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var rotationLeft_1 = require("../../code/facebook/rotationLeft");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testRotatinLeft = function () {
        var testArr = [
            new result_1.Result(function () {
                var input = "5 14".split(' ').map(function (x) { return +x; });
                var array = "1 2 3 4 5".split(' ').map(function (x) { return +x; });
                var result = rotationLeft_1.rotLeft(input[0], array, input[1]);
                return result.join(' ');
            }, "5 1 2 3 4")
        ];
        var isOk = true;
        testArr.forEach(function (test) {
            var tested = test.Run();
            var testOk = test.isOk;
            isOk = isOk && testOk;
            console.log('%c%s', "color: " + (testOk ? 'green' : 'red') + "; font: 1.2rem/1 Tahoma;", tested);
            return tested;
        });
        return isOk;
    };
    return Test;
}());
Test.testRotatinLeft();
//# sourceMappingURL=testRotationLeft.js.map