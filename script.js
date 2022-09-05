const currentDay = moment().format("LLLL");
const clock = moment().format("LTS");
$("#currentDay").text(currentDay);

//clock at top of page
function updateClock() {
  var now = new Date();
  setTimeout(updateClock, 1000);
}
// const now = new Date(hst);
// var t = $Timeout(hstClock, 300);

// function checkHstTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   } // add zero in front of numbers < 10
//   return i;
// }

// const container = $(".container");

//current time w/ moment.js
//   const moment = require("moment");
//   let now = moment();
//   console.log(now.format());
//<> creates a new element

//   for (var i = 9; i < 18; i++) {
//get the item from local storage, use i to select a particular txt area we want (adding val to txt area)
//   }
// });

//past,present,future with respective color-time-blocks
var cal = new Date(); // init date and time
var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock
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
