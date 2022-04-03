//globals
var now = moment().format("MMMM DD, YYYY");
var time = moment().hours();

//variables used in for loop
var timeBlock = $('.time-block');
var counter = 9;

//display current day in header
$('#currentDay').text(now);

//save tasks to local storage
$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".task").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, task);
})

//display each task depending on hour
$("#9 .task").val(localStorage.getItem("9"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#13 .task").val(localStorage.getItem("13"));
$("#14 .task").val(localStorage.getItem("14"));
$("#15 .task").val(localStorage.getItem("15"));
$("#16 .task").val(localStorage.getItem("16"));
$("#17 .task").val(localStorage.getItem("17"));

//color code hour blocks
for (var i = 0; i < timeBlock.length; i++) {
    //select the current timeBlock based on hour, starting at 9
    var currentBlock = $('#' + counter);
    //get id and turn it into an integer
    var idHour = $('.time-block')[i].id;
    parseInt(idHour);
    // check each id to see if it is past present or future
    if (idHour < time) {
        currentBlock.addClass("past");
    } else if (idHour == time) {
        currentBlock.addClass("present");
    } else if (idHour > time) {
        currentBlock.addClass("future");
    }
    //increase counter to select next time block
    counter ++;
}