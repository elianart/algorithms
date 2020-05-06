// Задачка: за время О(n) найти индекс элемента в массиве,
// где сумма чисел справа равна сумме чисел слева

// 1239501

export class FindIndex {
    public static Run(array: Array<number>){
        if(!Array.isArray(array) || array.length === 0){
            return null;
        }

        var fullSum = 0;
        for(let i = 0; i < array.length; i++){
            fullSum += array[i];
        }

        var previousSum = 0;
        var result = [];
        array.forEach((e, index) => {
            let test = fullSum - previousSum - e;
            if(test === previousSum){
                result.push({element: e, index: index});
            }
            previousSum += e;
        });

        return result;
    }
}