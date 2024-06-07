/*

   Author: Rylind Richmond
   Date: 2024
*/
//declare the URL
const URL = "https://xkcd.com/info.0.json";


//set up ajax object
const comicObj = {
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
  const comic = data.img;
  const title = data.title;
  const alt = data.alt;




  // put comic in output div
  $("#output").html("<div>" + comic + "</div>");
  $("#output").prepend("<div>" + title + "</div>");
  $("#output").append("<div>" + alt + "</div>");
}




// create ajax error callback
function ajaxError(request,error){
     console.log("Oops:", request, error);
}
