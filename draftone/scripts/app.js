function authenticate()
{
    let emailAddress=document.getElementById("uEmail").value;
    let password=document.getElementById("uPassword").value;
    let status= AuthController(emailAddress,password);
    if(status)
    {
        console.log("Logged");
    }
    else
    {
        console.log("Failed");
    }
}