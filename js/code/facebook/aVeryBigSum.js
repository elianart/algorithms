"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AVeryBigSum(length, arr) {
    var result = new Array(length);
    var numbers = null; //Array from array
    var maxLength = 0;
    numbers = arr.map(function (element) {
        var result = toArray(element, maxLength);
        maxLength = result.maxLength;
        return result.result;
    });
    if (maxLength === 1) {
        return numbers.reduce(function (prev, cur) { return prev + cur[0]; }, 0);
    }
    var result = [];
    var sumForIndex = 0;
    for (var indexInNumber = 0; indexInNumber < maxLength; indexInNumber++) {
        var sumForResult = sumForIndex;
        sumForIndex = 0;
        for (var indexInArray = 0; indexInArray < length; indexInArray++) {
            var len = numbers[indexInArray].length - 1;
            var curr = len >= indexInNumber ? numbers[indexInArray][indexInNumber] : 0;
            var sum = sumForResult + curr;
            if (sum >= 10) {
                sum = sum - 10;
                sumForIndex += 1;
            }
            sumForResult = sum;
        }
        result.push(sumForResult);
    }
    result.push(sumForIndex);
    var stringAnswer = result.reverse().join('');
    return +stringAnswer;
}
exports.AVeryBigSum = AVeryBigSum;
function toArray(element, maxLength) {
    var result = [];
    toTen(element, result);
    maxLength = maxLength < result.length ? result.length : maxLength;
    return { maxLength: maxLength, result: result };
}
exports.toArray = toArray;
var toTen = function (number, result) {
    if (number < 10) {
        result.push(+number);
        return;
    }
    if (number === 10) {
        result.push(0);
        result.push(1);
        return;
    }
    var div = number / 10;
    var splitted = div.toString().split('.');
    var remainder = splitted.length < 2 ? 0 : +splitted[1];
    result.push(remainder);
    toTen(+splitted[0], result);
};
//# sourceMappingURL=aVeryBigSum.js.map