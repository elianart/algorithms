"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var moneyCharge_1 = require("../../code/coursera/moneyCharge");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testMoneyCharge = function () {
        var testArr = [
            new result_1.Result(function () {
                var money = 40;
                var coins = "1 5 10 20 25".split(" ").map(function (x) { return +x; });
                var result = moneyCharge_1.moneyCharge(money, coins);
                var res = "\n" + result.map(function (current) { return current.value + ": " + current.count; }).join('\n');
                console.log(res);
                return result.reduce(function (sum, current) { return sum + current.value * current.count; }, 0);
            }, 40)
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