"use strict";
//moneyCharge
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var moneyCharge_1 = require("../../code/coursera/moneyCharge");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testMoneyCharge = function () {
        var testArr = [
            new result_1.Result(function () {
                var money = 26;
                var coins = "1 2 5 10 100".split(" ");
                var result = moneyCharge_1.moneyCharge(money, coins);
                return result.reduce(function (res, current) { return res + (" " + current.value + ": " + current.count); });
            }, "10: 2")
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
Test.testMoneyCharge();
//# sourceMappingURL=testMoneyCharge.js.map