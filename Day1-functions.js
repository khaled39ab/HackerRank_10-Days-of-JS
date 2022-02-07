// Task

// Implement a function named factorial that has one parameter: an integer n . It must return the value of  (i.e. n factorial)
// We return the value of 4! = 4*3*2*1

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
 function factorial(n){
     let factorial = 1;
     for (let i = 1; i <= n; i++){
         factorial = factorial * i;
     }
     return factorial;
 }

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}