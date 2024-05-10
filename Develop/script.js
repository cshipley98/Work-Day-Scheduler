currentDay = moment().format("MMMM do YYYY, h:mm:ss a");
$("currentDay").text(currentDay);

//color indicates whether the date is past, present, or future.
$("time-block").each(function(){
  var currentTome = moment ();
  var hour = moment().hour($(this).attr("data-hour"));

  // retrieve tasks from local storage
  var tasks = localStorage.getItem(hour.hour());

  $(this).next().text(tasks)

  //if color is in past add class past
  if(hour < currentTime){
        $(this).next().addClass("past")
  }
 // if color is current add class present and class hour
 else if(hour.hour() === currentTime.hour()) {
  $(this).next().addClass("present")
}
// if color is future time add class future 
else if(hour > currentTime){
  $(this).next().addClass("future")
}
})

// Enter tasks and save to local storage
$(".saveBtn").on("click", function(){
var task = $(this).prev().val() 
localStorage.setItem($(this).prev().prev().attr("data-hour"), task)
})

