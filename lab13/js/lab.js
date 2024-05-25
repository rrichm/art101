/*

   Author: Rylind Richmond
   Date: 2024
*/

// given a number and an object that looks like this: 
// {3: "Fizz", 5: "Buzz", "Boom"}
// loops over the numbers and outputs the number and the matching text 
// for factors 
function fizzBuzzBoom(maxNums, factorObj) {
    // iterate over all of out numbers
    for (var num=0; num<maxNums; num++) {
        // resent output string
        var outputStr = "";
        // iterate over the factors we got from the html 
        for (var factor in factorObj) {
            // check to see if this num is a mutltiple of factor 
            if (num % factor == 0) {
                // if yes, then add the text to output string 
                outputStr += factorObj [factor];
            }
        }
        // now if we have words in outputStr, format it like this " - FizzBuzz!"
        if (outputStr) { 
            outputStr = " - " + outputStr + "!";
        }
        outputToPage(num.toString() + outputStr)
    }
}
function reportError(str) {
    outputEl.innerHTML = "<div class='error'>" + str + "</div>";
}
document.getElementById("submit").addEventListener("click", function() {
    var max = document.getElementById("max").value;
    console.log("max:", max)
    if (! max) {
        reportError("you must provide a maximum");
        function outputToPage(str) {
            document.getElementById("results").innerHTML += "<p>" + str + "</p>";
        }
}
})