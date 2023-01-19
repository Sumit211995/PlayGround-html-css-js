function mainForm(){
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var mbNo = document.getElementById("mbno").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var letters = /^[A-Za-z]+$/;  
  var num = /[0-9]/;
  var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  

  const formReset = document.getElementById("form-submit");

  this.editData(firstName,lastName,mbNo,email,message,letters,num,email_val,formReset);  
 
}

function editData(firstName,lastName,mbNo,email,message,letters,num,email_val,formReset) 
{

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
    // alert("Form Submit Successfully" +
    //        alert("First Name: "+ firstName +
    //        " Last Name: "+ lastName));
      const displayDetails =document.getElementById("output1");
      displayDetails.innerHTML = "First Name : "+firstName  + " <br> " +"Last Name : " +lastName + " <br> " + " Mobile No : "+mbNo +" <br>  "+ "Your Message : " +message;
          this.Reset(formReset);
      }
}

function Reset(formReset) {
  formReset.reset();
}

function toggleMenu() {

  const toggleStyle = document.querySelector('.collapse');

  if (toggleStyle.style.display === 'none'){

    toggleStyle.style.display ='block';

  } else 
  {
    toggleStyle.style.display = 'none';
  }

}
function productDetails(){
  alert("Comming Soon");
}

function contactUs(){
  location.href="form.html";
}