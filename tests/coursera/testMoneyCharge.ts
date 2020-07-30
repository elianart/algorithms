import {Result} from "../types/result";
import { moneyCharge } from "../../code/coursera/moneyCharge";

class ​Test​ {
    public static testMoneyCharge(): boolean{
        let testArr = [
            // new Result<number>(() => {
            //     var money = 40;
            //     var coins = "25 20 10 5 1".split(" ").map(x => +x);
            //     var result = moneyCharge(money, coins);
            //     var res = "\n" + result.map((current) => `${current.value}: ${current.count}`).join('\n');
            //     console.log(res);
            //     return result.reduce((sum, current) => sum + current.value * current.count, 0);
            // }, 40),

            // new Result<number>(() => {
            //     var money = 35;
            //     var coins = "21 10 5 1".split(" ").map(x => +x);
            //     var result = moneyCharge(money, coins);
            //     var res = "\n" + result.map((current) => `${current.value}: ${current.count}`).join('\n');
            //     console.log(res);
            //     return result.reduce((sum, current) => sum + current.value * current.count, 0);
            // }, 35),

            // new Result<number>(() => {
            //     var money = 101;
            //     var coins = "25 10 5 1".split(" ").map(x => +x);
            //     var result = moneyCharge(money, coins);
            //     var res = "\n" + result.map((current) => `${current.value}: ${current.count}`).join('\n');
            //     console.log(res);
            //     return result.reduce((sum, current) => sum + current.value * current.count, 0);
            // }, 101),

            // new Result<number>(() => {
            //     var money = 8;
            //     var coins = "5 3 1".split(" ").map(x => +x);
            //     var result = moneyCharge(money, coins);
            //     var res = "\n" + result.map((current) => `${current.value}: ${current.count}`).join('\n');
            //     console.log(res);
            //     return result.reduce((sum, current) => sum + current.value * current.count, 0);
            // }, 8),

            // new Result<number>(() => {
            //     var money = 2;
            //     var coins = "232323273 1".split(" ").map(x => +x);
            //     var result = moneyCharge(money, coins);
            //     var res = "\n" + result.map((current) => `${current.value}: ${current.count}`).join('\n');
            //     console.log(res);
            //     return result.reduce((sum, current) => sum + current.value * current.count, 0);
            // }, 2),
            
            new Result<number>(() => {
                var money = 6249;
                var coins = [186, 419, 83, 408].map(x => +x);
                coins = coins.sort((a,b) => a-b);
                coins = coins.reverse();
                var result = moneyCharge(money, coins);
                var res = "\n" + result.map((current) => `${current.value}: ${current.count}`).join('\n');
                console.log(res);
                return result.reduce((sum, current) => sum + current.value * current.count, 0);
            }, 6249)
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