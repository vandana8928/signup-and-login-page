
    function clearerror(){
        error=document.getElementsByClassName('formerror');
        for(let item of error){
          item.innerHTML="";
  
        }
      }
       function seterror(id,error)
       {
          ele=document.getElementById(id);
          ele.getElementsByClassName('formerror')[0].innerHTML=error;
  
       }
  
      function validateform(){
          clearerror();
          let reval=true;
          let name=document.forms['myform']["fname"].value;
          if(name.length<5){
              seterror("name","*Length of the name too short");
              return false;
          }
          let email=document.forms['myform']["email"].value;
          if(email.length>20){
              seterror("email","*Length of the email too long");
              return false;
          }
          let phone=document.forms['myform']["phone"].value;
          if(phone.length!=10){
              seterror("phone","**phone number should be of 10 digits");
              return false;
          }
          let pass=document.forms['myform']["password"].value;
          if(pass.length<6){
              seterror("phone","*password length should be atleast 6 character long");
              return false;
          }
          let cpass=document.forms['myform']["cpassword"].value;
          if(cpass!=pass){
              seterror("cpass","password and confirm password should matched");
              return false;
          }
         
          return reval;
  
      }
  