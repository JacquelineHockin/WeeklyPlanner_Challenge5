{
  /* <div class="row">
        <div class="col-2"></div>
        <textarea class="col-8"></textarea>
        <button class="col-2"></button>
      </div> */
}

$(document).ready(function () {
  for (var i = 9; i < 18; i++) {
    //<> creates a new element
    var rowDiv = $("<div>")
      .addClass("row time-block")
      .attr("id", "row-" + i);
    var hourDiv = $("<div>").addClass("col-2 hour").text(i);
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
