//what you can do is review it with pure javascript
	//then rewrite it with jquery

	//keep track on who is playing

	function startGame(){
		document.turn = "X";

		setMessage(document.turn + " gets to start.");

	}

	//function for setting message

	function setMessage(msg){
		document.getElementById("message").innerText = msg;
	}