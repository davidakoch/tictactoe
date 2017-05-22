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

	//i think you can use jquery toggle for this...
	function nextMove(square){
		if(square.innerText == ""){
			square.innerText = document.turn;
			switchTurn();
		} else {
			setMessage("That Square is Already Used.")
		}
	}	

	function switchTurn(){
		if(document.turn == "X"){
			document.turn = "O"; 
		} else {
			document.turn = "X"; 
		}
		
		setMessage("It's " + document.turn + "'s turn");
	}

	function winGame