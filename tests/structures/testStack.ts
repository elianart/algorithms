import {Result} from "../types/result";
import {Stack} from "../../code/structures/stack";

namespace ​test​ {
    export function TestStack(): boolean{
        let testArr = [
            new Result<number[]>(() => {
                var stack = new Stack<number>(6);
                var array = [1,2,3,4,5,6];
                var reversed = [];
                array.forEach(x=>{
                    stack.Push(x);
                });
                array.forEach((x, index)=>{
                    reversed[index] = stack.Pop();
                });
                return reversed;
            }, [6,5,4,3,2,1]),
            new Result<number[]>(() => {
                var stack = new Stack<number>(1);
                var array = [0];
                var reversed = [];
                array.forEach(x=>{
                    stack.Push(x);
                });
                array.forEach((x, index)=>{
                    reversed[index] = stack.Pop();
                });
                return reversed;
            }, [0]),
            new Result<number[]>(() => {
                var stack = new Stack<number>(6);
                var array = [];
                var reversed = [];
                array.forEach(x=>{
                    stack.Push(x);
                });
                array.forEach((x, index)=>{
                    reversed[index] = stack.Pop();
                });
                return reversed;
            }, [])
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

​test​.TestStack();