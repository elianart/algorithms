import {Result} from "../types/result";
import { gcd } from "../../code/coursera/gcd";

class ​Test​ {
    public static testGcd(): boolean{
        let testArr = [
            new Result<number>(() => {
                return gcd(357,234);
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

​Test​.testGcd();