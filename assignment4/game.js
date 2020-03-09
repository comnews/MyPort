window.onload = pageLoad;

function pageLoad(){
	var startButton = document.getElementById("start");
	startButton.onclick = startGame ;

}

function startGame(){
	alert("Ready");
	clearScreen();
	clearInterval(timer);
	addBox();
	timeStart();
}

var timer = null;

function timeStart(){
	var TIMER_TICK = 1000;
	timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	
	timer = setInterval(timeUpdate,TIMER_TICK);
	function timeUpdate(){
		var allbox = document.querySelectorAll("#squares-layer div");
		if (allbox.length==0){
			alert("You Win!");
			clearInterval(timer);
			timer = null;
		}
		if (second==0 && allbox.length>0){
			alert("You lose!");
			clearInterval(timer);
			timer = null;
			clearScreen();
		}
		second--;
		x.innerHTML = second;
	}
}


function addBox(){

	var numbox = document.getElementById("numbox").value;

	var squaresLayer = document.getElementById("squares-layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div");
		tempbox.className = "square "+ colorDrop;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		//add element to HTML node
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer div");

	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}




