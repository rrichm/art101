/*

   Author: Rylind Richmond
   Date: 2024
*/
//declare the URL
const URL = "https://icanhazdadjoke.com/";


//Click listener
$("#activate").click(function(){
   // console.log("click");
   //call ajax
  $.ajax(ajaxObj);
});


//set up ajax object
const ajaxObj = {
   url: URL,
   // data: {},
   type: "GET",
   dataType : "json",
   success: ajaxSuccess,
   error: ajaxError
};


// create ajax success callback (named)
function ajaxSuccess(data) {
  // console.log("Data:", data);
  // parse json
  const joke = data.joke;


  // put joke in output div
  $("#output").html("<div>" + joke + "</div>");
 
}




// create ajax error callback
function ajaxError(request,error){
     console.log("Oops:", request, error);
}