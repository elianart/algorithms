"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LongestSubstring = /** @class */ (function () {
    function LongestSubstring() {
    }
    LongestSubstring.LengthOfLongestSubstring = function (str) {
        if (str === "") {
            return 0;
        }
        if (str.length === 1) {
            return 1;
        }
        var result = null;
        var start = 0;
        var end = 0;
        Array.prototype.splice.apply(this, str).forEach(function (v, i) {
            var index = str.slice(start, end).indexOf(v);
            if (index !== -1) {
                result = result > end - start ? result : end - start;
                start = index + start + 1;
            }
            end += 1;
        });
        return result > end - start ? result : end - start;
    };
    return LongestSubstring;
}());
exports.LongestSubstring = LongestSubstring;
//# sourceMappingURL=longestSubstring.js.map