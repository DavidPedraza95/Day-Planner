$(document).ready(function () {
  // This will check for when the user clicks on the save buttons
  $('.saveBtn').on('click', function () {
    // This will get the nearby values in JQuery
    var jvalues = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    // This will add the appointment to the user's localStorage
    localStorage.setItem(time, jvalues);

    // This will let the user know that the appointment was saved to their localStorage
    $('.notification').addClass('show');

    // This will eliminate the notification after 10 seconds
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 10000);
  });

  function hourTracker() {
    // This will get the current number of hours
    var currentHour = moment().hours();

    // This will loop over the different time blocks
    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // This will check if we have moved past this time
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourTracker();

  // This will check if the current time needs to be updated
  var interval = setInterval(hourTracker, 15000);

  // This will load previously saved appointments from the user's localStorage
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  $('#hour-19 .description').val(localStorage.getItem('hour-19'));
  $('#hour-20 .description').val(localStorage.getItem('hour-20'));
  $('#hour-21 .description').val(localStorage.getItem('hour-21'));
  $('#hour-22 .description').val(localStorage.getItem('hour-22'));
  $('#hour-23 .description').val(localStorage.getItem('hour-23'));

  // This will show the current day on the page
  $('#currentDay').text(moment().format('dddd, MMMM Do'));
});
