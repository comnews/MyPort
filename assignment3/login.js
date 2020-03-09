function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }
 var parameter;
 var ID;
 var Pass;
window.onload = loginLoad;
function loginLoad(){
	ID = document.getElementById("username");
	Pass = document.getElementById("password");
	var form = document.getElementById("myLogin");
	
	parameter = getParams();
	console.log(parameter["username"]);
	console.log(parameter["password"]);
    form.onsubmit = checkLogin;
}

function checkLogin(){
	if (ID.value != parameter["username"]||Pass.value != parameter["password"]){
		alert("username หรือ password ไม่ถูกต้อง")
		return false;
	}


}

			