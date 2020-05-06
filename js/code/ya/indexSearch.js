"use strict";
// Задачка: за время О(n) найти индекс элемента в массиве,
// где сумма чисел справа равна сумме чисел слева
Object.defineProperty(exports, "__esModule", { value: true });
// 1239501
var FindIndex = /** @class */ (function () {
    function FindIndex() {
    }
    FindIndex.Run = function (array) {
        if (!Array.isArray(array) || array.length === 0) {
            return null;
        }
        var fullSum = 0;
        for (var i = 0; i < array.length; i++) {
            fullSum += array[i];
        }
        var previousSum = 0;
        var result = [];
        array.forEach(function (e, index) {
            var test = fullSum - previousSum - e;
            if (test === previousSum) {
                result.push({ element: e, index: index });
            }
            previousSum += e;
        });
        return result;
    };
    return FindIndex;
}());
exports.FindIndex = FindIndex;
//# sourceMappingURL=indexSearch.js.map