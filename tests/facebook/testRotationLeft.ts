import {Result} from "../types/result";
import { rotLeft } from "../../code/facebook/rotationLeft";

class ​Test​ {
    public static testRotatinLeft(): boolean{
        let testArr = [
            new Result<any>(() => {
                var input = "5 14".split(' ').map(x=> +x);
                var array = "1 2 3 4 5".split(' ').map(x=> +x);
                var result = rotLeft(input[0], array, input[1]);
                return result.join(' ');
            }, "5 1 2 3 4")
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

​Test​.testRotatinLeft();