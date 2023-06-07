//Calculating prime numbers
//Let's start with a prototype function to calculate if a number is prime...

Number.prototype.isPrime = function() {
    for( let i=2; i<this; i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}

//and then see how long it takes to find the 10,000th prime number.

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

//On this author's laptop this took 50 seconds.


//====#1====Rewrite isPrime() to calculate primes faster

//====#2====Try calculating the 100,000th and 1,000,000th prime numbers

//====#3====Determine if the iterative or recursive Fibonacci function is faster

//====#4====Write a more efficient function to reverse a string