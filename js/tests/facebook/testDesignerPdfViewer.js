"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result_1 = require("../types/result");
var designerPDFViewer_1 = require("../../code/facebook/designerPDFViewer");
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.testDesignerPdfViewer = function () {
        var testArr = [
            new result_1.Result(function () {
                var h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7".split(' ');
                var word = "zaba";
                var sum = designerPDFViewer_1.designerPdfViewer(h, word);
                return sum;
            }, 28),
            new result_1.Result(function () {
                var h = "1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5".split(' ');
                var word = "abc";
                var sum = designerPDFViewer_1.designerPdfViewer(h, word);
                return sum;
            }, 9)
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
Test.testDesignerPdfViewer();
//# sourceMappingURL=testDesignerPdfViewer.js.map