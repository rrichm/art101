/*
lab.js - This simple JavaScript/jQuery uses buttons to modify some elements on this page

Requirements: jQuery must be loaded for this script to work.

Author: Rylind Richmond
Date: May 9 2024
*/

// function for toggling results

function toggleResults () {
    //toggle the results on and off
    $("#results").toggle();

    $("h1").toggleClass("blue");

}

$("#pressButton").click(toggleResults);

