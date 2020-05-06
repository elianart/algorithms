"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function designerPdfViewer(h, word) {
    var wordArr = word.split('');
    var unique = {};
    wordArr.forEach(function (element) {
        unique[element] = 1;
    });
    var keys = Object.keys(unique);
    var sorted = keys.sort();
    var alphabet = genAlphabet(sorted[sorted.length - 1]);
    var max = 0;
    keys.forEach(function (key) {
        var height = h[alphabet[key]];
        max = height > max ? height : max;
    });
    return max * word.length;
}
exports.designerPdfViewer = designerPdfViewer;
function genAlphabet(to) {
    var i = 'a'.charCodeAt(0);
    var j = to.charCodeAt(0);
    var alphabet = {};
    var counter = 0;
    for (; i <= j; ++i) {
        alphabet[String.fromCharCode(i)] = counter;
        counter++;
    }
    return alphabet;
}
//# sourceMappingURL=designerPDFViewer.js.map