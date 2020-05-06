"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(left, right, value) {
        this.left = left;
        this.right = right;
        this.value = value;
    }
    Node.prototype.toString = function () {
        return "left: " + this.left + ", right: " + this.right + ", value: " + this.value;
    };
    return Node;
}());
exports.Node = Node;
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
    }
    BinaryTree.findNode = function (tree, value) {
        if (tree == null) {
            return null;
        }
        var node = tree;
        while (node.value !== value) {
            if (node.value == null) {
                return null;
            }
            if (node.value > value) {
                node = node.left;
                continue;
            }
            node = node.right;
        }
        return node;
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
//# sourceMappingURL=binaryTree.js.map