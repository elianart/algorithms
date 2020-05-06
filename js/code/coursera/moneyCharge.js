"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function moneyCharge(money, coins) {
    if (money < coins[0]) {
        return money;
    }
    var charge = [];
    for (var index = coins.length; index >= 0; --index) {
        if (money === 0) {
            return charge;
        }
        var element = coins[index];
        if (money >= element) {
            var remainder = Math.floor(money / element);
            charge.push({ count: remainder, value: element });
            money = money - remainder * element;
        }
    }
    return charge;
}
exports.moneyCharge = moneyCharge;
//# sourceMappingURL=moneyCharge.js.map