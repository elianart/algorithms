//moneyCharge

import {Result} from "../types/result";
import { moneyCharge } from "../../code/coursera/moneyCharge";

class ​Test​ {
    public static testMoneyCharge(): boolean{
        let testArr = [
            new Result<number>(() => {
                var money = 26;
                var coins = "1 2 5 10 100".split(" ");
                var result = moneyCharge(money, coins);
                return result.reduce((res, current) => res + ` ${current.value}: ${current.count}`);
            }, "10: 2")
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

​Test​.testMoneyCharge();