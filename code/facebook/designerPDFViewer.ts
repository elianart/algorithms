export function designerPdfViewer(h, word) {
    var wordArr = word.split('');
    var unique = {};
    wordArr.forEach(element => {
        unique[element] = 1;
    });

    var keys = Object.keys(unique);
    var sorted = keys.sort();
    var alphabet = genAlphabet(sorted[sorted.length - 1]);
    var max = 0;
    keys.forEach(key => {
        var height = h[alphabet[key]];
        max = height > max ? height : max;
    });

    return max * word.length;
}

function genAlphabet(to){
    var i = 'a'.charCodeAt(0);
    var j = to.charCodeAt(0);
    var alphabet = {}; 
    var counter = 0;
    for(; i<=j; ++i){
        alphabet[String.fromCharCode(i)] = counter;
        counter++;
    }

    return alphabet;
}