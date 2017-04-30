//what you can do is review it with pure javascript
	//then rewrite it with jquery
		//make sure to get it review through code camp


//definitely need to add document on ready when you are dealing with jquery 


	//keep track on who is playing

	function startGame(){
		document.turn = "X";

		setMessage(document.turn + " will start.");

	}

	//function for setting message

	function setMessage(msg){
		//this definitely takes a jquery function...maybe value or html
		document.getElementById("message").innerText = msg;
	}

	function nextMove(){
		//an if else statement

		document.set inner html as X
			then next inner html is O
	}