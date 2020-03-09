
var LN;
var B;
var Mail;
var ID;
var Pass;
var RP;

var ErrorMsg;
window.onload = pageLoad;
function pageLoad(){

    LN = document.forms["myForm"]["lastname"];
    B = document.getElementById("Birth");
    Mail = document.getElementById("Email");
    ID = document.getElementById("ID");
    Pass = document.getElementById("Pass");
    RP = document.getElementById("Repass");
    ErrorMsg = document.getElementById("errormsg");

    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;

}


function validateForm() {
    if (LN.value==""||B.value==""||Mail.value==""||ID.value==""){
        alert("โปรดกรอกข้อมูลให้ครบ");
        return false;
    }
    if (Pass.value != RP.value){
         ErrorMsg.innerText = "Passwordไม่ตรงกัน";
         
         return false;
    }

    
}