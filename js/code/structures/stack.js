"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack(size) {
        this.array = null;
        this.nextI = null;
        this.lastI = null;
        this.array = new Array(size);
        this.lastI = size - 1;
        this.nextI = this.lastI;
    }
    Stack.prototype.Push = function (value) {
        if (this.nextI < 0) {
            throw "Out of Array exception";
        }
        this.array[this.nextI] = value;
        this.nextI -= 1;
    };
    Stack.prototype.Pop = function () {
        this.nextI += 1;
        if (this.nextI > this.lastI) {
            throw "Out of Array exception";
        }
        return this.array[this.nextI];
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map