// Author: Rylind Richmond <rrichmon@ucsc.edu>
// Created: 25 April 2024

// Define Variables
myTransport = ["Ford Taurus", "bike", "rides from friends", "Purple Jumprope"]

// create an object for my main ride
const myMainRide = {
  make : "Ford",
  model : "Taurus",
  color : "Rusty",
  year : 1995, 
  age : function(){
    return 2022 - this.year; 
  }
} 

// output
document.writeln("Kinds of transportation I use: ", myTransport, "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '/t'), "</pre");