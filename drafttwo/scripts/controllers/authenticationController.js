function validate(emailAddress,password) {
    let status=false;
    if (emailAddress == UserCred.emailAddress && password == UserCred.password) {
        status=true;   
    }
    return status;
}


// function checkemail()
// {
//     if(document.getElementById("uemail").value=="" || !document.getElementById("uemail").value.includes(".com"))
//     {
//         document.getElementById("emailerror").innerHTML="Invalid Email";
//         document.getElementById("emailerror").style.display="block";        
//     }
//     else{
//         document.getElementById("emailerror").innerHTML="";
//         document.getElementById("emailerror").style.display="none";
//     }
// }

// function checkpassword()
// {
//     if(document.getElementById("upassword").value=="" || document.getElementById("upassword").value.length<8)
//     {
//         document.getElementById("passworderror").innerHTML="Invalid Password";
//         document.getElementById("passworderror").style.display="block";        
//     }
//     else{
//         document.getElementById("passworderror").innerHTML="";
//         document.getElementById("passworderror").style.display="none";
//     }
// }