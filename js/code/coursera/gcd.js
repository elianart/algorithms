"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    var reminder = a % b;
    return gcd(b, reminder);
}
exports.gcd = gcd;
//# sourceMappingURL=gcd.js.map