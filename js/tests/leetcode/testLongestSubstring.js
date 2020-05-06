"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var longestSubstring_1 = require("../../code/leetcode/longestSubstring");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testLongestSubstring = function () {
        var testArr = [
            new result_1.Result(function () { return longestSubstring_1.LongestSubstring.LengthOfLongestSubstring("tmmzuxt"); }, 5),
            new result_1.Result(function () { return longestSubstring_1.LongestSubstring.LengthOfLongestSubstring("aabaab!bb"); }, 3),
            new result_1.Result(function () { return longestSubstring_1.LongestSubstring.LengthOfLongestSubstring("bpfbhmipx"); }, 7),
            new result_1.Result(function () { return longestSubstring_1.LongestSubstring.LengthOfLongestSubstring("bpfbhmipx"); }, 7),
            new result_1.Result(function () { return longestSubstring_1.LongestSubstring.LengthOfLongestSubstring(" "); }, 1),
            new result_1.Result(function () { return longestSubstring_1.LongestSubstring.LengthOfLongestSubstring("abcabcbb"); }, 3),
            new result_1.Result(function () { return longestSubstring_1.LongestSubstring.LengthOfLongestSubstring("pwwkew"); }, 3),
            new result_1.Result(function () { return longestSubstring_1.LongestSubstring.LengthOfLongestSubstring(""); }, 0),
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
Test.testLongestSubstring();
//# sourceMappingURL=testLongestSubstring.js.map