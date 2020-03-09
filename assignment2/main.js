var count = 0;
function postFunction(){
    var TextBox = document.getElementById("text1");
    var blog1 = document.getElementById("post1");
    var blog2 = document.getElementById("reply1");
    var blog3 = document.getElementById("reply2");
    switch (count){
        case 0: blog1.innerText = TextBox.value; break;
        case 1: blog2.innerText = TextBox.value; break;
        case 2: blog3.innerText = TextBox.value; break;    
        default:break;
    }
    TextBox.value = "";
    count+=1;
}
function clearFunction(){
    var blog1 = document.getElementById("post1");
    var blog2 = document.getElementById("reply1");
    var blog3 = document.getElementById("reply2");
    blog1.innerText = "";
    blog2.innerText = "";
    blog3.innerText = "";
    count = 0;
}