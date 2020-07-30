"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maxPairwiseProduct(array) {
    var result = 0;
    var length = array.length;
    var product = 0;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            if (i != j) {
                product = array[i] * array[j];
                if (product > result) {
                    result = product;
                }
            }
        }
    }
    return result;
}
exports.maxPairwiseProduct = maxPairwiseProduct;
//# sourceMappingURL=maxPairwiseProduct.js.map