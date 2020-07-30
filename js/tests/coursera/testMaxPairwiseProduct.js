"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var maxPairwiseProduct_1 = require("../../code/coursera/maxPairwiseProduct");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testMaxPairwiseProduct = function () {
        var testArr = [
            new result_1.Result(function () {
                var numbers = "7 5 14 2 8 8 10 1 2 3".split(' ').map(function (x) { return +x; });
                return maxPairwiseProduct_1.maxPairwiseProduct(numbers);
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
Test.testMaxPairwiseProduct();
//# sourceMappingURL=testMaxPairwiseProduct.js.map