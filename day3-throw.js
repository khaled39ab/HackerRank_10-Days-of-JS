// Task

// Complete the isPositive function below. It has one integer parameter, a.If the value of a is positive, it must return the string YES.Otherwise, it must throw an Error according to the following rules:

// * If a is 0, throw an Error with message = Zero Error.
// * If a is negative, throw an Error with message = Negative Error.
// Input Format

// Locked stub code in the editor reads the following input from stdin and passes each value of a to the function as an argument:
// The first line is an integer, n, denoting the number of times the function will be called with some a.
// Each line i of the n subsequent lines contains an integer denoting some a.

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
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) {
        return 'YES'
    } else if (a === 0) {
        return 'Zero Error'
    } else {
        return 'Negative Error'
    }
}


function main() {
    const n = +(readLine());

    for (let i = 0; i < n; i++) {
        const a = +(readLine());

        try {
            console.log(isPositive(a));
        } catch (e) {
            console.log(e.message);
        }
    }
}