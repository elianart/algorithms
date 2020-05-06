"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var listNode_1 = require("../../code/leetcode/listNode");
var listNode_2 = require("../../code/leetcode/listNode");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testListNode = function () {
        var testArr = [
            new result_1.Result(function () {
                var node1 = new listNode_1.ListNode(2, 4, 3);
                var node2 = new listNode_1.ListNode(5, 6, 4);
                var sum = listNode_2.ListNodeExtensions.AddTwoNumbers_v2(node1, node2);
                return sum.Reverse().ToNumber();
            }, 807),
            new result_1.Result(function () {
                var node1 = new listNode_1.ListNode(2, 4, 3);
                var node2 = new listNode_1.ListNode(5, 6);
                var sum = listNode_2.ListNodeExtensions.AddTwoNumbers_v2(node1, node2);
                return sum.Reverse().ToNumber();
            }, 407),
            new result_1.Result(function () {
                var node1 = new listNode_1.ListNode(2, 4, 3);
                var node2 = new listNode_1.ListNode();
                var sum = listNode_2.ListNodeExtensions.AddTwoNumbers_v2(node1, node2);
                return sum.Reverse().ToNumber();
            }, 342),
            new result_1.Result(function () {
                var node1 = new listNode_1.ListNode(2, 4, 3);
                var sum = listNode_2.ListNodeExtensions.AddTwoNumbers_v2(node1, null);
                return sum.Reverse().ToNumber();
            }, 342),
            new result_1.Result(function () {
                var node1 = new listNode_1.ListNode(5);
                var node2 = new listNode_1.ListNode(5);
                var sum = listNode_2.ListNodeExtensions.AddTwoNumbers_v2(node1, node2);
                return sum.ToString();
            }, '0, 1'),
            new result_1.Result(function () {
                var node1 = new listNode_1.ListNode(9);
                var node2 = new listNode_1.ListNode(9);
                var sum = listNode_2.ListNodeExtensions.AddTwoNumbers(node1, node2);
                return sum.ToString();
            }, '8, 1'),
        ];
        var isOk = true;
        testArr.forEach(function (test) {
            var tested = test.Run();
            var testOk = test.isOk;
            isOk = isOk && testOk;
            console.log('%c%s', "color: " + (testOk ? 'green' : 'red') + "; font: 1.2rem/1 Tahoma;", tested);
            return tested;
        });
        return isOk;
    };
    return Test;
}());
Test.testListNode();
//# sourceMappingURL=testListNode.js.map