//document.getElementById("form").addEventListener("click" , submitForm, false);

function mainForm(){
  var firstName=document.getElementById("firstname").value;
  var lastName=document.getElementById("lastname").value;
  var mbNo=document.getElementById("mbno").value;
  var email=document.getElementById("email").value;
  var message=document.getElementById("message").value;

  var letters = /^[A-Za-z]+$/;  
  var num= /[0-9]/;
  var email_val= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

  if(firstName==="" || lastName==="" || mbNo==="" || message===""){
    alert("Enter each Details Correctly");
  }
  else if(!letters.test(firstName)){
    alert("First Name is incorrect must contain alphabets only");
  }
  else if(!letters.test(lastName)){
    alert("last Name is incorrect must contain alphabets only");
  }
  else if(mbNo.length!=10){
    alert("Mobile no is incorrect");
  }
  else if(!email_val.test(email)){
    alert("invalid email format please enter valid email id");
  }
  else if(message.length<10){
    alert("please write the message atleast 10 character.");
  }
  else{
    alert("Form Submit Successfully");
  }
  
}
function submit() {
  document.getElementById("form").reset();
  
}