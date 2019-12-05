$(document).ready(()=>{
    var errorCounter = [];
    $('button').on('click',()=>{

        var name = $('#nameId').val();
        var age = $('#ageId').val();
        var nick = $('#nickId').val();
        var isNameValid = name != "" && isNaN(name);

        if(isNameValid){
            borderGreen('nameId');
            errorCounter[0]= 0;
        }else{
            borderRed('nameId');
            errorCounter[0]= 1;
        }

        var isAgeValid = age.length <=3 && age !="" && age > 0 && !isNaN(age) && age == parseInt(age);
        if(isAgeValid){
           borderGreen('ageId');
           errorCounter[1]= 0;
        }else{
           borderRed('ageId');
           errorCounter[1]= 2;
        }
        var atLeast9Chars = nick.length >= 9;
        var atLeast1Uppercase = false;
       for(let i = 0 ; i < nick.length; i++){
        var chars = nick.charAt(i);
        if(isNaN(chars)){
            var isUppercase = chars.toUpperCase() == chars;
            atLeast1Uppercase = atLeast1Uppercase || isUppercase;
        }
       }
       var isNickNameValid = atLeast1Uppercase && atLeast9Chars && nick != "";
       if(isNickNameValid){
           borderGreen('nickId');
           errorCounter[2]= 0;
       }else{
           borderRed('nickId');
           errorCounter[2]= 3;
       }
       //all information correct
       var isAllValid = isNameValid && isAgeValid && isNickNameValid;
       if(isAllValid){
        showSuccess();
       }else{
        showError(errorCounter);
       }
    });
});
var borderGreen = (elementId)=>{
    $('#'+elementId).addClass('border-success').removeClass('border-danger');
}
var borderRed = (elementId)=>{
    $('#'+elementId).addClass('border-danger').removeClass('border-success');
}

var showSuccess = ()=>{
var success = "";
success += `
    <div class="alert alert-success">
         <strong>Success !</strong>
    </div>
`;
$('#message').html(success);
}
var errorMessage = ["Name is empty !","Age must be number !","Nickname at least 1 uppercase and 9 chars"];
var showError = (errors)=>{
  
    // var error = "";
    var errorSMS = "";
        if( errors[0] == 1){
            errorSMS += "- " + errorMessage[0]+ "<br>";
        }else{
            errorSMS += "";
        }

        if( errors[1] == 2){
            errorSMS +="- " + errorMessage[1]+ "<br>";
        }else{
            errorSMS += "";
        }

        if( errors[2] == 3){
            errorSMS += "- " + errorMessage[2]+ "<br>";
        }else{
            errorSMS += "";
        }
    
        
    $('#message').html(
        `
        <div class="alert alert-danger">
             <strong>${errorSMS}</strong>
         </div>
        `
    );
}

