const max = +process.argv[2];


let FizzBuzz = {
    [Symbol.iterator]() {
        let current = 0;

        return {
            next() {
                [current] = [current+1];

                if(current <= max && current % 15 === 0) {
                    return {done: false, value: 'FizzBuzz'};
                } else if(current <= max && current % 5 === 0) {
                    return {done: false, value: 'Buzz'};
                } else if(current <= max && current % 3 === 0) {
                    return {done: false, value: 'Fizz'};
                } else if(current <= max) { return {done: false, value: current}; }

                return {done: true};
            }
        }
    }
}

for(var n of FizzBuzz) {
    console.log(n);
}
