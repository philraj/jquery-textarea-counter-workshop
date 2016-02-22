$(document).ready( () => {
  var charLimit = $('#textbox').attr('maxlength');
  
  $('#textbox').keyup( () => {
    var count = $('#textbox').val().length;
    $('#counter').text(charLimit - count);
  });
});
