{
  /* <div class="row">
        <div class="col-2"></div>
        <textarea class="col-8"></textarea>
        <button class="col-2"></button>
      </div> */
}

const currentDay = moment().format("LLLL");
const clock = moment().format("LTS");

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

const container = $(".container");

$("#currentDay").text(currentDay);

$(document).ready(function () {
  //current time w/ moment.js
  //   const moment = require("moment");
  //   let now = moment();
  //   console.log(now.format());
  //<> creates a new element
  for (var i = 9; i < 12; i++) {
    //entire row
    var rowDiv = $("<div>")
      .addClass("row time-block")
      .attr("id", "row-" + i);
    //left column w/ hr
    var hourDiv = $("<div>")
      .addClass("col-2 hour")
      .text(i + " AM");
    //middle text area
    var textDiv = $("<textarea>").addClass("col-8 description");
    //past
    // var past = $("<div>").addClass("hr-past");
    //right column (save buttons)
    var saveBtn = $("<button>")
      .addClass("col-2 saveBtn")
      .attr("id", "btn-" + i)
      //taking whatever is written in the middle txt area & saving to local storage
      .click(function () {
        var num = $(this).attr("id");
        var hourTxtBox = $(this).siblings("textarea").val();
        localStorage.setItem("textarea-" + num, hourTxtBox);
        console.log(hourTxtBox);
      });
    var icon = $("<i>").addClass("fas fa-save");
    $(".container").append(
      rowDiv.append(hourDiv, textDiv, saveBtn.append(icon))
    );
  }
  //for loop exclusively to make 12AM --> 12PM
  for (var i = 12; i < 13; i++) {
    var rowDiv = $("<div>")
      .addClass("row time-block")
      .attr("id", "row-" + i);
    var hourDiv = $("<div>")
      .addClass("col-2 hour")
      .text(i + " PM");
    var textDiv = $("<textarea>").addClass("col-8 description");
    var saveBtn = $("<button>")
      .addClass("col-2 saveBtn")
      .attr("id", "btn-" + i)
      .click(function () {
        var num = $(this).attr("id");
        var hourTxtBox = $(this).siblings("textarea").val();
        localStorage.setItem("textarea-" + num, hourTxtBox);
        console.log(hourTxtBox);
      });
    var icon = $("<i>").addClass("fas fa-save");
    $(".container").append(
      rowDiv.append(hourDiv, textDiv, saveBtn.append(icon))
    );
  }

  //for loop for 1-5PM
  for (var i = 1; i < 6; i++) {
    var rowDiv = $("<div>")
      .addClass("row time-block")
      .attr("id", "row-" + i);
    var hourDiv = $("<div>")
      .addClass("col-2 hour")
      .text(i + " PM");
    var textDiv = $("<textarea>").addClass("col-8 description");
    var saveBtn = $("<button>")
      .addClass("col-2 saveBtn")
      .attr("id", "btn-" + i)
      .click(function () {
        var num = $(this).attr("id");
        var hourTxtBox = $(this).siblings("textarea").val();
        localStorage.setItem("textarea-" + num, hourTxtBox);
        console.log(hourTxtBox);
      });
    var icon = $("<i>").addClass("fas fa-save");
    $(".container").append(
      rowDiv.append(hourDiv, textDiv, saveBtn.append(icon))
    );
  }

  for (var i = 9; i < 18; i++) {
    //get the item from local storage, use i to select a particular txt area we want (adding val to txt area)
  }
});

var cal = new Date(); // init date and time
var currentHour = cal.getHours(); // returns 0-23 on a 24 hour clock
console.log(currentHour);
for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById("row-" + i).addClass("present");
  } else if (i === currentHour) {
    document.getElementById("row-" + i).addClass("present");
  } else if (i > currentHour) {
    document.getElementById("row-" + i).addClass("future");
  }
}
