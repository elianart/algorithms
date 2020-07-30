"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var gcd_1 = require("../../code/coursera/gcd");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testGcd = function () {
        var testArr = [
            new result_1.Result(function () {
                return gcd_1.gcd(357, 234);
            }, 140)
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
Test.testGcd();
//# sourceMappingURL=testGcd.js.map