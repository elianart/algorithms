
const readline = require('readline');
const lines = [];
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', (line) => {
    lines.push(line.toString().split(' ').map(Number));
    readLineAndInvoke(line);
    //rl.on('line', readLineAndInvoke);
});


var firstIndex;
var firstValue;
var secondIndex;
var secondValue;
function readLineAndInvoke(line) {
    lines.push(line.toString().split(' ').map(Number));
    
    var first = lines[0].sort();
    // firstIndex = lines[0].length - 1;
    // firstValue = first[firstIndex];

    // var second = lines[1].sort();
    // secondIndex = lines[1].length - 1;
    // secondValue = second[secondIndex];

    var result = fibonacci(first);
    console.log(result);
    process.exit();
}
