import {Result} from "../types/result";
import { maxPairwiseProduct } from "../../code/coursera/maxPairwiseProduct";

class ​Test​ {
    public static testMaxPairwiseProduct(): boolean{
        let testArr = [
            new Result<number>(() => {
                var numbers = "7 5 14 2 8 8 10 1 2 3".split(' '). map(x => +x);
                return maxPairwiseProduct(numbers);
            }, 140)
        ];

        let isOk: boolean = true;
        testArr.forEach(test => {
            let tested = test.Run();
            let testOk = test.isOk;
            isOk = isOk && testOk;
            console.log('%c%s', `color: ${testOk ? 'green' : 'red'}; font: 1.2rem/1 Tahoma;`, tested);
            return tested;
        });
        
        return isOk;
    }
}

​Test​.testMaxPairwiseProduct();