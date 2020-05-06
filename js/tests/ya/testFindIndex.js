"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test;
(function (test_1) {
    function RunFindIndex() {
        var testArr = [
        //new Result<Array<number>>(()=> FindIndex.Run([1,2,3,9,5,0,1]), [{element: 9, index: 3}]),
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
    test_1.RunFindIndex = RunFindIndex;
})(test || (test = {}));
test.RunFindIndex();
//# sourceMappingURL=testFindIndex.js.map