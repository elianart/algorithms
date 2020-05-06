"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var binaryTree_1 = require("../../code/structures/binaryTree");
var binaryTree_2 = require("../../code/structures/binaryTree");
var test;
(function (test_1) {
    function RunFindNode() {
        var tree = new binaryTree_2.Node(new binaryTree_2.Node(new binaryTree_2.Node(new binaryTree_2.Node(null, null, 1), new binaryTree_2.Node(null, null, 3), 2), new binaryTree_2.Node(new binaryTree_2.Node(null, null, 5), null, 6), 4), new binaryTree_2.Node(new binaryTree_2.Node(null, null, 8), new binaryTree_2.Node(null, null, 10), 9), 7);
        var testArr = [
            new result_1.Result(function () { return binaryTree_1.BinaryTree.findNode(tree, 3); }, new binaryTree_2.Node(null, null, 3))
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
    test_1.RunFindNode = RunFindNode;
})(test || (test = {}));
test.RunFindNode();
//# sourceMappingURL=testBinaryTree.js.map