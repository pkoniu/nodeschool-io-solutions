var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');

    commaSep.forEach(val => {
        if(val !== '') args.push(+val);
    });
});

var avg = function(...args) {
    let sum = args.reduce((sum, n) => sum+n);
    return sum/args.length;
}

console.log(avg(...args));
