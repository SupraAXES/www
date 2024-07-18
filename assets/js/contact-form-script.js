(function($){"use strict";$("#contactForm").validator().on("submit",function(event){if(event.isDefaultPrevented()){formError();submitMSG(false,"Did you fill in the form properly?");}else{event.preventDefault();submitForm();}});function submitForm(){
  var name=$("#name").val();
  var email=$("#email").val();
  var message=$("#message").val();
  var phone=$("#phone").val();
  var message=$("#message").val();
  var subject=$("#subject").val();
  var company=$("#company").val();
  var env=$("#env").val();
  $.ajax({type:"POST", url:"/api/contact/request",
    data:"name="+name+"&email="+email+"&message="+message+"&phone="+phone+"&message="+message+"&subject="+subject+"&company="+company+"&env="+env,
    success:function(res){if(res && res.code == 200){formSuccess();}else{formError();submitMSG(false,res.message);}}});}
function formSuccess(){$("#contactForm")[0].reset();submitMSG(true,"请求已提交")}
function formError(){$("#contactForm").removeClass().addClass('animate__animated animate__shakeX').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){$(this).removeClass();});}
function submitMSG(valid,msg){if(valid){var msgClasses="h4 submit-post-info tada animated text-success";}else{var msgClasses="h4 submit-post-info text-danger";}
$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);}}(jQuery));