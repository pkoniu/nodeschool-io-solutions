const max = process.argv[2];

let FizzBuzz = function*() {
    let current=1;

    while(current <= max) {
        let num = current;

        if(num%15===0) yield 'FizzBuzz';
        else if(num%5===0) yield 'Buzz';
        else if(num%3===0) yield 'Fizz';
        else yield num;

        current = current+1;
    }
}();

for(var n of FizzBuzz) console.log(n);
