"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("./types/result");
var stack_1 = require("../code/structures/stack");
var test;
(function (test_1) {
    function TestStack() {
        var testArr = [
            new result_1.Result(function () {
                var stack = new stack_1.Stack(6);
                var array = [1, 2, 3, 4, 5, 6];
                var reversed = [];
                array.forEach(function (x) {
                    stack.Push(x);
                });
                array.forEach(function (x, index) {
                    reversed[index] = stack.Pop();
                });
                return reversed;
            }, [6, 5, 4, 3, 2, 1]),
            new result_1.Result(function () {
                var stack = new stack_1.Stack(1);
                var array = [0];
                var reversed = [];
                array.forEach(function (x) {
                    stack.Push(x);
                });
                array.forEach(function (x, index) {
                    reversed[index] = stack.Pop();
                });
                return reversed;
            }, [0]),
            new result_1.Result(function () {
                var stack = new stack_1.Stack(6);
                var array = [];
                var reversed = [];
                array.forEach(function (x) {
                    stack.Push(x);
                });
                array.forEach(function (x, index) {
                    reversed[index] = stack.Pop();
                });
                return reversed;
            }, [])
        ];
        var isOk;
        testArr.forEach(function (test) {
            var tested = test.Run();
            var testOk = test.isOk;
            isOk = isOk && testOk;
            console.log('%c%s', "color: " + (testOk ? 'green' : 'red') + "; font: 1.2rem/1 Tahoma;", tested);
            return tested;
        });
        return isOk;
    }
    test_1.TestStack = TestStack;
})(test || (test = {}));
test.TestStack();
//# sourceMappingURL=testStack.js.map