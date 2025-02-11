$(document).ready(() => {
    $("#submitbtn").click(() => {
        let emailAddress = $("#uEmail").val();
        let password = $("#uPassword").val();
        let status = validate(emailAddress, password);
        if (status) {
            $("#flowerlist").css("display","block");
        }
        else {
            $("#flowerlist").css("display","none");
        }
    })

})

function authenticate() {
    let emailAddress = document.getElementById("uEmail").value;
    let password = document.getElementById("uPassword").value;
    let status = AuthController(emailAddress, password);
    if (status) {
        console.log("Logged");
    }
    else {
        console.log("Failed");
    }
}