"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function moneyCharge(money, coins) {
    var saver = {
        charge: null,
        min: 0,
    };
    coins.reduce(function (arr, current) {
        justDo(function () {
            var _a;
            var result = calculateEquals(current, money);
            if (result.isOk) {
                return { charge: result.charge, isOk: result.isOk };
            }
            else {
                if (arr.length === 0) {
                    return { isOk: false };
                }
                var remResult = calculate(coins, result.remainder);
                if (remResult.isOk) {
                    (_a = result.charge).splice.apply(_a, __spreadArrays([result.charge.length - 1,
                        0], remResult.charge));
                    return { charge: result.charge, isOk: remResult.isOk };
                }
                return { isOk: false };
            }
        }, saver);
        arr.push(current);
        justDo(function () { return calculate(arr, money); }, saver);
        return arr;
    }, []);
    return saver.charge;
}
exports.moneyCharge = moneyCharge;
function justDo(func, saver) {
    var result = func();
    if (result.isOk) {
        var count = result.charge.reduce(function (sum, curr) { return sum + curr.count; }, 0);
        if (!saver.min || count < saver.min) {
            saver.min = count;
            saver.charge = result.charge;
        }
        return;
    }
}
function calculateEquals(coin, money) {
    var charge = [];
    if (money < coin) {
        return { charge: charge, isOk: money === 0, remainder: money };
    }
    var remainder = Math.floor(money / coin);
    money = money - remainder * coin;
    charge.push({ count: remainder, value: coin });
    return { charge: charge, isOk: money === 0, remainder: money };
}
function calculate(coins, money) {
    var charge = [];
    for (var index = 0; index < coins.length; index++) {
        if (money === 0) {
            return { charge: charge, isOk: true };
        }
        var element = coins[index];
        var remainder = Math.floor(money / element);
        charge.push({ count: remainder, value: element });
        money = money - remainder * element;
    }
    return { charge: charge, isOk: money === 0, remainder: money };
}
//# sourceMappingURL=moneyCharge.js.map