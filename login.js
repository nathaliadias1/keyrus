$(document).ready(function(){
  $('.btn-login').click(function(){
    if (jQuery.trim($('#inputEmail').val()) == '' || jQuery.trim($('#inputPassword').val()) == '')
    {
      $('.alert-danger').show();
      $('.alert-success').hide();
    } else {
      $('.alert-danger').hide();
      $('.alert-success').show();
    }
  });
});
