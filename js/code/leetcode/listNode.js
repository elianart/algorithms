"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ListNode = /** @class */ (function () {
    function ListNode() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!Array.isArray(args)) {
            throw new Error("Incompatible type");
        }
        if (args.length === 0) {
            return;
        }
        this.val = args[0];
        var maxIndex = args.length - 1;
        if (maxIndex <= 0) {
            return;
        }
        args.reduce(function (node, _, index) {
            var nextIndex = index + 1;
            if (nextIndex <= maxIndex) {
                node.next = new ListNode(args[index + 1]);
            }
            return node.next;
        }, this);
    }
    ListNode.prototype.ToString = function () {
        var str = "" + this.val;
        var next = this.next;
        while (next != null) {
            str += ", " + next.val;
            next = next.next;
        }
        return str;
    };
    ListNode.prototype.ToNumber = function () {
        var str = "" + this.val;
        var next = this.next;
        while (next != null) {
            str += "" + next.val;
            next = next.next;
        }
        return +str;
    };
    ListNode.prototype.Reverse = function () {
        var node = this;
        if (node == null || node.next == null) {
            return;
        }
        var list = new Array();
        while (node != null) {
            list.push(node);
            node = node.next;
        }
        //let reversed = list.reverse();
        for (var i = list.length; i > 0; i--) {
            if (list[i] !== undefined) {
                list[i].next = list[i - 1];
            }
        }
        list[0].next = null;
        return list[list.length - 1];
    };
    return ListNode;
}());
exports.ListNode = ListNode;
var ListNodeExtensions = /** @class */ (function () {
    function ListNodeExtensions() {
    }
    ListNodeExtensions.AddTwoNumbers_v2 = function (l1, l2) {
        var head = new ListNode(0);
        var iterator = head;
        var carry = 0;
        while (l1 || l2) {
            var v1 = l1 ? l1.val : 0;
            var v2 = l2 ? l2.val : 0;
            var sum = v1 + v2 + carry;
            var rest = sum / 10;
            var result = sum;
            if (rest >= 1) {
                result = sum - 10;
                carry = 1;
            }
            else {
                carry = 0;
            }
            iterator.next = new ListNode(result);
            iterator = iterator.next;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        if (carry > 0) {
            iterator.next = new ListNode(carry);
        }
        return head.next;
    };
    ListNodeExtensions.AddTwoNumbers = function (l1, l2) {
        var tmp = 0;
        var lres = new ListNode();
        var iterator = new ListNode();
        while (l1 || l2 || tmp) {
            var val1 = l1 ? (l1.val ? l1.val : 0) : 0;
            var val2 = l2 ? (l2.val ? l2.val : 0) : 0;
            if (iterator.val != undefined) {
                iterator.next = new ListNode();
                iterator = iterator.next;
            }
            else {
                iterator = lres;
            }
            var fullRes = val1 + val2 + tmp;
            var res = 0;
            if (fullRes >= 10) {
                tmp = Math.floor(fullRes / 10);
                res = fullRes - tmp * 10;
            }
            else {
                tmp = 0;
                res = fullRes;
            }
            iterator.val = res;
            l1 = l1 ? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        return lres;
    };
    return ListNodeExtensions;
}());
exports.ListNodeExtensions = ListNodeExtensions;
//# sourceMappingURL=listNode.js.map