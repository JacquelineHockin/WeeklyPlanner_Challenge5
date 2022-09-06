//running clock at top of page
setInterval(function () {
  var clock = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").text(clock);
}, 1000);

//past,present,future timeblocks with respective colors
var cal = new Date();
var currentHour = cal.getHours(); // grabs number from 0-23 on a 24 hour clock
console.log(currentHour);

for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById("row-" + i).classList.add("past");
  } else if (i === currentHour) {
    document.getElementById("row-" + i).classList.add("present");
  } else if (i > currentHour) {
    document.getElementById("row-" + i).classList.add("future");
  }
}

//local storage
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
  });
  //local storage //text remains after user refreshes the page
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));
  $("#hour18 .description").val(localStorage.getItem("hour18"));
  $("#hour19 .description").val(localStorage.getItem("hour19"));
  $("#hour20 .description").val(localStorage.getItem("hour20"));
  $("#hour21 .description").val(localStorage.getItem("hour21"));
});
