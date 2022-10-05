/* 
Function Description

Complete the getSecondLargest function in the editor below.

getSecondLargest has the following parameters:
*int nums[n]: an array of integers

Returns
*int: the second largest number in nums

 */
/* 'use strict';

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
} */

/**
*   Return the second largest number in the array.
*   @ param {Number[]} nums - An array of numbers.
*   @ return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var max = Math.max.apply(null, nums); // get the max of the array
    nums.splice(nums.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, nums);
    return max
}

console.log(getSecondLargest([48, 95, 90, 54, 23]));

/* function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
} */