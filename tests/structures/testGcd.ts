import {Result} from "../types/result";
import {Euclid} from "../../code/structures/euclid";

namespace ​test​ {
    export function RunGcd(): boolean{
        let testArr = [
            new Result<number>(()=> Euclid.Gcd(12, 3), 3),
            new Result<number>(()=> Euclid.Gcd(12, 0), 0),
            new Result<number>(()=> Euclid.Gcd(0, 3), 0),
            new Result<number>(()=> Euclid.Gcd(13, 3), 1),
        ];

        let isOk: boolean;
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

​test​.RunGcd();