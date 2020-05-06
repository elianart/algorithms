"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Euclid = /** @class */ (function () {
    function Euclid() {
    }
    Euclid.Gcd = function (a, b) {
        if (b > a) {
            var tmp = a;
            a = b;
            b = tmp;
        }
        if (a < 2 || b < 2) {
            return b;
        }
        while (b != 0) {
            var reminder = a % b;
            a = b;
            b = reminder;
        }
        return a;
    };
    return Euclid;
}());
exports.Euclid = Euclid;
//# sourceMappingURL=euclid.js.map