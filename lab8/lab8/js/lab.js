/* 
* Author: Rylind Richmond <rrichmon@ucsc.edu>
* Created: 4 May 2024
* License: Public Domain
*/

function isEven (x){
    return (x + 2==0);
}

// test function;
console.log("Is 14 even?", isEven(14));
console.log("Is 3 even?", isEven(3));

array = [15, 13, 20, 7, 21]
console.log("My array", array); 

var result = array.map(isEven); 
// should return [false, false, false, false, false]
console.log("Test of evenness of array:", results);

var result = array.map(function (x) { 
    return x + 7; 
})
// should return [22, 20, 27, 14, 28]
console.log("Squareroot of array:", result);