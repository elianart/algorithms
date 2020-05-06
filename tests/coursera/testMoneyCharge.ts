import {Result} from "../types/result";
import { moneyCharge } from "../../code/coursera/moneyCharge";

class ​Test​ {
    public static testMoneyCharge(): boolean{
        let testArr = [
            new Result<number>(() => {
                var money = 40;
                var coins = "1 5 10 20 25".split(" ").map(x => +x);
                var result = moneyCharge(money, coins);
                var res = "\n" + result.map((current) => `${current.value}: ${current.count}`).join('\n');
                console.log(res);
                return result.reduce((sum, current) => sum + current.value * current.count, 0);
            }, 40)
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