function setError(id, error){
    element= document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML= error;

    
}
function formValidation(){
    var returnval=true;
    clearError();
    //perform validation and if validation fails,set the value of returnval to flase
    var name=document.forms['myForm']["fname"].value;
    if(name.length<5){
        setError("name","*length of name is too short");
        returnval=false
    }
    if(name.length==0){
        setError("name","*length of name is too short");
        returnval=false
    }
    var Email =document.forms['myForm']["fGmail"].value;
    if(Email.length>15){
        setError("fGmail"," *fGmail length of name is too short");
        returnval=false
    }
    var password =document.forms['myForm']["fpassword"].value;
    if(password.length<6){
        setError("fpassword"," *password should be atlest 6 charters long");
        returnval=false
    }
    var cpassword =document.forms['myForm']["fcpass"].value;
    if(cpassword!= password){
        setError("fcpass"," *password and confirm password should match");
        returnval=false
    }
    var phone =document.forms['myForm']["fphone"].value;
    if( phone.length!=10){
        setError("fphone"," phone number sholud be of 10 digits");
        returnval=false
    }
    
  
    return returnval;
}