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
		if(checkForWinner(document.turn)) {
			setMessage("Congratulations, " + document.turn + "! You've won!")
		} else if(document.turn == "X"){
			document.turn = "O"; 
			setMessage("It's " + document.turn + "'s turn");
		} else {
			document.turn = "X"; 
			setMessage("It's " + document.turn + "'s turn");
		}
	}

	function checkForWinner(move) {
		var result = false;
		if(checkRow(1, 2, 3, move) || 
		   checkRow(4, 5, 6, move) || 
		   checkRow(7, 8, 9, move) || 
		   checkRow(1, 4, 7, move) || 
		   checkRow(2, 5, 8, move) || 
		   checkRow(3, 6, 9, move) ||
		   checkRow(1, 5, 9, move) || 
		   checkRow(3, 5, 7, move)){
			result = true;
		}
		return result;
	}

	function checkRow(a, b, c, move){
		var result = false;
		if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
			result = true
		}
		return result;
	}

	function getBox(number){
		//definitely a jquery method such as val or html
		return document.getElementById("s" + number).innerText;
	}