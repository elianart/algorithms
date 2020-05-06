export function rotLeft(length, array, rotationCount) {
  if(rotationCount % length === 0){
      return array;
  }

  if(rotationCount > length - 1){
    rotationCount = rotationCount - Math.floor(rotationCount/length) * length;
  }

    var result = new Array(length);
    array.forEach((element, i) => {
      var newIndexRaw = i - rotationCount;
      if (newIndexRaw < 0) {
        result[length + newIndexRaw] = element;
      } else {
        result[newIndexRaw] = element;
      }
    });

    array = result;
  

  return result;
}
