import {Result} from "../types/result";
import {LongestSubstring} from "../../code/leetcode/longestSubstring";

class ​Test​ {
    public static testLongestSubstring(): boolean{
        let testArr = [
            new Result<number>(() => LongestSubstring.LengthOfLongestSubstring("tmmzuxt"), 5),
            new Result<number>(() => LongestSubstring.LengthOfLongestSubstring("aabaab!bb"), 3),
            new Result<number>(() => LongestSubstring.LengthOfLongestSubstring("bpfbhmipx"), 7),
            new Result<number>(() => LongestSubstring.LengthOfLongestSubstring("bpfbhmipx"), 7),
            new Result<number>(() => LongestSubstring.LengthOfLongestSubstring(" "), 1),
            new Result<number>(() => LongestSubstring.LengthOfLongestSubstring("abcabcbb"), 3),
            new Result<number>(() => LongestSubstring.LengthOfLongestSubstring("pwwkew"), 3),
            new Result<number>(() => LongestSubstring.LengthOfLongestSubstring(""), 0),
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

​Test​.testLongestSubstring();