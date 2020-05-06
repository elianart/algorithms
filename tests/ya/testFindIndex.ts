import {Result} from "../types/result";
import {FindIndex} from "../../code/ya/indexSearch";

namespace ​test​ {
    export function RunFindIndex(): boolean{
        let testArr = [
            //new Result<Array<number>>(()=> FindIndex.Run([1,2,3,9,5,0,1]), [{element: 9, index: 3}]),
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

​test​.RunFindIndex();