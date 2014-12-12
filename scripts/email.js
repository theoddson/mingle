$(function(){
  $('.password').focus();

  $('.login').on('click',function() {
    clearValidation();
    validateFields();
  });
  $('.password').on ('keypress', function (e) {
    if(e.keyCode == 13) {
      clearValidation();
      validateFields();
    }
  });
  function clearValidation(){
    $('.form-error').remove();
  }

  function validateFields() {
    var inputs = $('input[type=text]'),
    errors = [];
    for (var i=0; i<inputs.length; i++) {
      var input = inputs[i],
      error = '',
      validationType = $(input).data('validate');

      var inputValue = $(input).val();

      var validI = ''
      var validP = ''

      //validate admin
      if(validationType == 'username'){
        if(inputValue == 'admin'){
          var validI = inputValue;
          //alert(validI);
        }else{
          error = $(input).data('error-message');
        }
      }

      //validate password
      if(validationType == 'password'){
        if(inputValue == 'password'){
          var validP = inputValue;
          //alert(validP);
        }else{
          error = $(input).data('error-message');
        }
      }

      if(validP == "password"){

        window.location.href = "matches.html";
      }




      errors.push(error);





    }
    for (var e=0;e<errors.length; e++){
      $('.form-errors').append('<li class="form-error">'+errors[e]+'</li>');
    }
  };



});
