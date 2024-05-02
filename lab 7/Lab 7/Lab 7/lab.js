// Author: Rylind Richmond <rrichmon@ucsc.edu>
// Created: 1 May 2024

// sortUserName
function sortUserName(){
    var userName = window.prompt('What is my name?');
    console.log("userName =", userName);
// split spring to array
var nameArray = userName.split('');
console.log("nameArray =", nameArray);
//sort the array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort); 
// join array back to a string 
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
}
// output
document.writeln("Rylind:", 
sortUserName(), "</br>");
