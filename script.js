{
  /* <div class="row">
        <div class="col-2"></div>
        <textarea class="col-8"></textarea>
        <button class="col-2"></button>
      </div> */
}

$(document).ready(function () {
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

// $("row-9").html("9 AM");

// document.getElementById("row-9").innerHtml = "9AM";
