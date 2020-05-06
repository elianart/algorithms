import {Result} from "../types/result";
import { AVeryBigSum } from "../../code/facebook/aVeryBigSum";

class ​Test​ {
    public static testAVeryBigSum(): boolean{
        let testArr = [
            new Result<number>(() => {
                var length = 2;
                var array = "12 39".split(" ");
                var sum = AVeryBigSum(length, array);
                return sum;
            }, 51),

            new Result<number>(() => {
                var length = 5;
                var array = "1000000001 1000000002 1000000003 1000000004 1000000005".split(" ");
                var sum = AVeryBigSum(length, array);
                return sum;
            }, 5000000015),

            new Result<number>(() => {
                var length = 5;
                var array = "0 1".split(" ").map(x=> +x);
                var sum = AVeryBigSum(length, array);
                return sum;
            }, 1),

            new Result<number>(() => {
                var array = "9 9".split(" ").map(x=> +x);
                var length = array.length;
                var sum = AVeryBigSum(length, array);
                return sum;
            }, 18),

            new Result<number>(() => {
                var array = "1001458909 1004570889 1007019111 1003302837 1002514638 1006431461 1002575010 1007514041 1007548981 1004402249".split(" ").map(x=> +x);
                var length = array.length;
                var sum = AVeryBigSum(length, array);
                return sum;
            }, 10047338126)
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

​Test​.testAVeryBigSum();