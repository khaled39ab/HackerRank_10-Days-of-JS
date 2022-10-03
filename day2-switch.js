/* 
Task

Complete the getLetter(s) function in the editor. It has one parameter: a string, , consisting of lowercase English alphabetic letters (i.e., a through z). It must return A, B, C, or D depending on the following criteria:

If the first character in string  is in the set , then return A.
If the first character in string  is in the set , then return B.
If the first character in string  is in the set , then return C.
If the first character in string  is in the set , then return D.
Hint: You can get the letter at some index  in  using the syntax s[i] or s.charAt(i).
 */

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

function getLetter(s) {
    let letter;
    // Write your code here
    let firstChar = s.charAt(0);

    /* 
        if (firstChar === 'a' || firstChar === 'e' || firstChar === 'i' || firstChar === 'o' || firstChar === 'u') {
            console.log('A');
        } else if (firstChar === 'b' || firstChar === 'c' || firstChar === 'd' || firstChar === 'f' || firstChar === 'g') {
            console.log('B');
        } else if (firstChar === 'h' || firstChar === 'j' || firstChar === 'k' || firstChar === 'l' || firstChar === 'm') {
            console.log('C');
        } else if (firstChar === 'n' || firstChar === 'p' || firstChar === 'q' || firstChar === 'r' || firstChar === 's' || firstChar === 't' || firstChar === 'v' || firstChar === 'w' || 'x' || 'y' || 'z') {
            console.log('D');
        }
     */

        switch (firstChar) {
            case 'a' || 'e' || 'i' || 'o' || 'u':
                letter = "A";
                break;
            
            case 'b' || 'c' || 'd' || 'f' || 'g':
                letter = "B"
                break;
    
            case 'h' || 'j' || 'k' || 'l' || 'm':
                letter = "C";
                break;
    
            default:
                letter = "D";
        }

    return letter;
}

function main() {
    const s = readLine();

    console.log(getLetter(s));
}