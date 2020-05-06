import {Result} from "../types/result";
import {ListNode} from "../../code/leetcode/listNode";
import {ListNodeExtensions} from "../../code/leetcode/listNode";

class ​Test​ {
    public static testListNode(): boolean{
        let testArr = [
        
            new Result<number>(() => {
                var node1 = new ListNode(2, 4, 3);
                var node2 = new ListNode(5, 6, 4);
                var sum = ListNodeExtensions.AddTwoNumbers_v2(node1, node2);
                return sum.Reverse().ToNumber();
            }, 807),
            new Result<number>(() => {
                var node1 = new ListNode(2, 4, 3);
                var node2 = new ListNode(5, 6);
                var sum = ListNodeExtensions.AddTwoNumbers_v2(node1, node2);
                return sum.Reverse().ToNumber();
            }, 407),
            new Result<number>(() => {
                var node1 = new ListNode(2, 4, 3);
                var node2 = new ListNode();
                var sum = ListNodeExtensions.AddTwoNumbers_v2(node1, node2);
                return sum.Reverse().ToNumber();
            }, 342),
            new Result<number>(() => {
                var node1 = new ListNode(2, 4, 3);
                var sum = ListNodeExtensions.AddTwoNumbers_v2(node1, null);
                return sum.Reverse().ToNumber();
            }, 342),
            new Result<string>(() => {
                var node1 = new ListNode(5);
                var node2 = new ListNode(5);
                var sum = ListNodeExtensions.AddTwoNumbers_v2(node1, node2);
                return sum.ToString();
            }, '0, 1'),
            new Result<string>(() => {
                var node1 = new ListNode(9);
                var node2 = new ListNode(9);
                var sum = ListNodeExtensions.AddTwoNumbers(node1, node2);
                return sum.ToString();
            }, '8, 1'),
            // new Result<ListNode>(() => new ListNode(1), new ListNode(1)),
            // new Result<string>(() => new ListNode(1, 2, 3, 4).ToString(), '1, 2, 3, 4'),
            // new Result<string>(() => {
            //     var node = new ListNode(1, 2, 3, 4);
            //     var tst = node.Reverse();
            //     return tst.ToString();
            // }, '4, 3, 2, 1'),
            // new Result<number>(() => {
            //     var node1 = new ListNode(2, 4, 3);
            //     var node2 = new ListNode(5, 6, 4);
            //     var sum = ListNodeExtensions.AddTwoNumbers(node1, node2);
            //     return sum.Reverse().ToNumber();
            // }, 807),
            // new Result<number>(() => {
            //     var node1 = new ListNode(2, 4, 3);
            //     var node2 = new ListNode(5, 6);
            //     var sum = ListNodeExtensions.AddTwoNumbers(node1, node2);
            //     return sum.Reverse().ToNumber();
            // }, 407),
            // new Result<number>(() => {
            //     var node1 = new ListNode(2, 4, 3);
            //     var node2 = new ListNode();
            //     var sum = ListNodeExtensions.AddTwoNumbers(node1, node2);
            //     return sum.Reverse().ToNumber();
            // }, 342),
            // new Result<number>(() => {
            //     var node1 = new ListNode(2, 4, 3);
            //     var sum = ListNodeExtensions.AddTwoNumbers(node1, null);
            //     return sum.Reverse().ToNumber();
            // }, 342),
            // new Result<string>(() => {
            //     var node1 = new ListNode(5);
            //     var node2 = new ListNode(5);
            //     var sum = ListNodeExtensions.AddTwoNumbers(node1, node2);
            //     return sum.ToString();
            // }, '0, 1'),
            // new Result<string>(() => {
            //     var node1 = new ListNode(9);
            //     var node2 = new ListNode(9);
            //     var sum = ListNodeExtensions.AddTwoNumbers(node1, node2);
            //     return sum.ToString();
            // }, '8, 1'),
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

​Test​.testListNode();