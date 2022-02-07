// Task

// Three Variables are declared for you in the editor below. You must use the + operator to perform the following sequence of operations:
// 1-Convert parameter to an integer (Number type), then sum it with  and print the result on a new line using console.log.
// 2-Convert parameter to a floating-point number (Number type), then sum it with  and print the result on a new line using console.log.
// 3-Print the concatenation of parameter on a new line using console.log. Note that  must be printed first.

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

function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    //Your code start here
    const firstInteger = 4;
    console.log (parseInt(firstInteger) + parseInt(secondInteger));
    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    const result2 = parseFloat(firstDecimal) + parseFloat(secondDecimal)
    console.log (result2);
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    console.log (firstString + secondString);

}

