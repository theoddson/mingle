$(function() {
  //G
  $.ajax({
    url: "http://students.philau.edu/dodson8269/scripts/cards.json",
    dataType: 'json',
    type: 'GET',
    success: function (matches) {

      grabMAtches(matches);

    },

  });

  function grabMAtches(matches){
    //do stuff with my data (matches)
    var match ='';
    for(var i=0; i<3;i++){

      match = matches[i];

      var card = '<div class="card">';
      card +=('<div class="card-top">');
      card +=('<div class="card-img">' + match.image + '</div>');
      card +=('<p class="card-name">' + match.name + '</p>');
      card +=('<p class="card-likes">' + match.about + '</p>');
      card +=('</div>');
      card +=('<div class="connect"><img src="images/cnct-btn-icon.png" /><p>Connect</p></div>');
      // i could'nt figure out how to add a class of no right to the third card so i added a class of right to the first 2
      if(i == 2){
        $('.card').addClass('right');
      }





      card+= '</div>'

      $('.wrap').append(card);


    }
    // Connect on click

    $('.wrap').find('.connect').on('click', function() {
      //gets the name of the rquester person
      var handle = $(this).parent('.card').find('.card-name').text();
      $(this).find('p').text('Requested');
      $(this).addClass('green');

    });

  };


  $('#nav').find('a').on('click',function(){
    $('#nav').find('a').removeClass('full');
    $(this).addClass('full');
  });

  $('.infos').on('click',function(){

    $('.pop-over').show();

  });

  $('.pop-over').on('click',function(){

    $('.pop-over').hide();

  });


});
