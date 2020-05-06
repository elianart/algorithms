"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("./types/result");
var euclid_1 = require("../code/structures/euclid");
var test;
(function (test_1) {
    function RunGcd() {
        var testArr = [
            new result_1.Result(function () { return euclid_1.Euclid.Gcd(12, 3); }, 3),
            new result_1.Result(function () { return euclid_1.Euclid.Gcd(12, 0); }, 0),
            new result_1.Result(function () { return euclid_1.Euclid.Gcd(0, 3); }, 0),
            new result_1.Result(function () { return euclid_1.Euclid.Gcd(13, 3); }, 1),
        ];
        var isOk;
        testArr.forEach(function (test) {
            var tested = test.Run();
            var testOk = test.isOk;
            isOk = isOk && testOk;
            console.log('%c%s', "color: " + (testOk ? 'green' : 'red') + "; font: 1.2rem/1 Tahoma;", tested);
            return tested;
        });
        return isOk;
    }
    test_1.RunGcd = RunGcd;
})(test || (test = {}));
test.RunGcd();
//# sourceMappingURL=testGcd.js.map