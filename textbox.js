$(document).ready( () => {
  var charLimit = $('#textbox').attr('maxlength');

  $('#textbox').keyup( () => {
    var remaining = charLimit - $('#textbox').val().length;
    var countColor;

    if (remaining > 40) countColor = 'green';
    else if (remaining > 20) countColor = 'orange';
    else countColor = 'red';

    $('#counter').css('color', countColor);
    $('#counter').text(remaining);
  });
});
