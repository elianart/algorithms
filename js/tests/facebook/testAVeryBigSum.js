"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var aVeryBigSum_1 = require("../../code/facebook/aVeryBigSum");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testAVeryBigSum = function () {
        var testArr = [
            new result_1.Result(function () {
                var length = 2;
                var array = "12 39".split(" ");
                var sum = aVeryBigSum_1.AVeryBigSum(length, array);
                return sum;
            }, 51),
            new result_1.Result(function () {
                var length = 5;
                var array = "1000000001 1000000002 1000000003 1000000004 1000000005".split(" ");
                var sum = aVeryBigSum_1.AVeryBigSum(length, array);
                return sum;
            }, 5000000015),
            new result_1.Result(function () {
                var length = 5;
                var array = "0 1".split(" ").map(function (x) { return +x; });
                var sum = aVeryBigSum_1.AVeryBigSum(length, array);
                return sum;
            }, 1),
            new result_1.Result(function () {
                var array = "9 9".split(" ").map(function (x) { return +x; });
                var length = array.length;
                var sum = aVeryBigSum_1.AVeryBigSum(length, array);
                return sum;
            }, 18),
            // 1001458909100145890910014589091001458909100145890910 014589 091001 45890 91001 458909
            new result_1.Result(function () {
                var array = "1001458909 1004570889 1007019111 1003302837 1002514638 1006431461 1002575010 1007514041 1007548981 1004402249".split(" ").map(function (x) { return +x; });
                var length = array.length;
                var sum = aVeryBigSum_1.AVeryBigSum(length, array);
                return sum;
            }, 10047338126)
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
Test.testAVeryBigSum();
//# sourceMappingURL=testAVeryBigSum.js.map