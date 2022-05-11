function validateEmail() {

  var errorEmail = document.getElementById("errortext");
  errorEmail.style.display='none';
  var inputEmail = document.getElementById("emailInput");
  var emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  if(inputEmail.value.match(emailFormat)) {
    inputEmail.style.border="1px solid green";
    errorEmail.innerHTML="Successfull";
    errorEmail.style.color="green";
    errorEmail.style.display="block";
    return true;
  } else {
    inputEmail.style.border="1px solid hsl(354, 100%, 66%)";
    errorEmail.innerHTML="Please provide a valid email";
    errorEmail.style.color="hsl(354, 100%, 66%)";
    errorEmail.style.display="block";
    return false;
  }

}