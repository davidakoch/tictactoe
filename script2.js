

//keep track on who is playing


function startGame(){

	document.turn = "X";

	if (Math.random() < 0.5){
		document.turn = "O";
	} 

	$('#message').text(document.turn + ' will start.')

	//add the way to actually play the game here

	document.winner = null;

	//next you have to be able to add x's and o's 

	if(document.turn == "X"){
		document.turn = "O"; 
	} else {
		document.turn = "X"; 
	}

	$('.square').click(function(){
		//if figured it out witt the this function 
		$(this).html(document.turn);
	})

/*
		//i think you can use jquery toggle for this...
		/*function nextMove(square){
			if(document.winner != null){
				setMessage(document.winner + " already won the game.");
			} else if(square.innerText == ""){
				square.innerText = document.turn;
				switchTurn();
			} else {
				setMessage("That Square is Already Used.")
			}
		}*/	

	

}

			/*for(var i = 1; i<=9; i++){
				clearBox(i);
			}

			/*document.turn = "X";
			if (Math.random() < 0.5){
				document.turn = "O";
			}
			document.winner = null;

			/*setMessage(document.turn + " will start.");

		}

		//function for setting message

		function setMessage(msg){
			//this definitely takes a jquery function...maybe value or html
			(#message).html(msg)
			document.getElementById("message").innerText = msg;
		}

		//i think you can use jquery toggle for this...
		function nextMove(square){
			if(document.winner != null){
				setMessage(document.winner + " already won the game.");
			} else if(square.innerText == ""){
				square.innerText = document.turn;
				switchTurn();
			} else {
				setMessage("That Square is Already Used.")
			}
		}	

		function switchTurn(){
			if(checkForWinner(document.turn)) {
				setMessage("Congratulations, " + document.turn + "! You've won!")
				document.winner = document.turn;
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

		function clearBox(number){
			document.getElementById("s" + number).innerText = "";
		}*/





$(document).ready(function(){

	startGame();

});