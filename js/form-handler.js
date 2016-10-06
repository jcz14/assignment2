function validate(form) {
  event.preventDefault();
  var valid=true;
  if(form.firstName.value=="") {
    alert("Please enter your first name.");
    valid=false;
  }
  if(form.lastName.value=="") {
    alert("Please enter your last name.");
    valid=false;
  }
  if(form.gender.value=="") {
    alert("Please select your gender.");
    valid=false;
  }
  if(form.email.value=="") {
    alert("Please enter your email address.");
    valid=false;
  }
  if(form.phone.value=="") {
    alert("Please enter your phone number.");
    valid=false;
  }
  if(form.street.value=="") {
    alert("Please enter your street address.");
    valid=false;
  }
  if(form.city.value=="") {
    alert("Please enter the name of the city in which you reside.");
    valid=false;
  }
  if(form.state.value=="") {
    alert("Please select the name of the state in which you reside.");
    valid=false;
  }
  if(form.zip.value=="") {
    alert("Please enter the ZIP code for your address.");
    valid=false;
  }
  if(valid) {
    document.getElementById("instructions").style.display="none";
    document.getElementById("form").style.display="none";
    document.getElementById("success").style.display="block";
  }
}