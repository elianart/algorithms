export function maxPairwiseProduct(array) {
    var result = 0;
    var length = array.length;
    let product = 0;
  
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
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
