
$(function(){

  $('.tab').on('click', function() {
  $('.tab').removeClass('current-tab');
  $(this).addClass('current-tab');
  var tabNumber = $(this).attr('id').split('tab')[1];

  $('.tab-area').hide();
  $('#tab-area'+tabNumber).show();
  });




//readonly

$('.edit').on('click',function(){

  $('input').removeAttr("readonly");

});


});
