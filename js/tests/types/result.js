"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Result = /** @class */ (function () {
    function Result(func, estimated) {
        this.estimated = estimated;
        this.func = func;
    }
    Object.defineProperty(Result.prototype, "isOk", {
        get: function () {
            var that = this;
            if (Array.isArray(this.estimated)) {
                if (!Array.isArray(this.result)) {
                    return false;
                }
                if (this.estimated.length !== this.result.length) {
                    return false;
                }
                if (this.estimated.length == 0) {
                    return true;
                }
                if (typeof (this.estimated[0]) !== 'object') {
                    return this.estimated.toString() === this.result.toString();
                }
                return this.estimated.every(function (value, index) {
                    var keys = Object.keys(value);
                    return keys.every((function (element) {
                        return value[element] === that.result[index][element];
                    }).bind(that));
                });
            }
            if (typeof (this.estimated) === 'object' &&
                this.result != null &&
                this.estimated != null) {
                var keys = Object.keys(this.estimated);
                return keys.every((function (element) {
                    return that.estimated[element] === that.result[element];
                }).bind(that));
            }
            return this.estimated === this.result;
        },
        enumerable: true,
        configurable: true
    });
    Result.prototype.Run = function () {
        if (this.func == null)
            throw 'tested functioon cant be null!';
        this.result = this.func();
        return this._toString();
    };
    Result.prototype._toString = function () {
        var that = this;
        if (typeof (this.estimated) === 'object' &&
            this.result != null &&
            this.estimated != null) {
            var keys = Object.keys(this.estimated);
            return keys.map(function (element) {
                return "\n estimated " + that.estimated[element] +
                    ("\n result " + that.result[element]) +
                    ("\n " + that.estimated[element] + " === " + that.result[element]);
            }).toString();
        }
        return "\n estimated: " + this.estimated +
            ("\n result: " + this.result) +
            ("\n isOk " + this.isOk);
    };
    return Result;
}());
exports.Result = Result;
//# sourceMappingURL=result.js.map