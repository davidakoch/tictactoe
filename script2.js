//you have to work on get box function
function startGame(){

	//document.turn = "X";

	if (Math.random() < 0.5){
		document.turn = "O";
	}  else {
		document.turn = "X"
	}

	$('#message').text(document.turn + ' will start.')

	document.winner = null;

	function switchTurn(){
		if(document.turn == "X"){
			document.turn = "O"; 
			$('#message').text("It's " + document.turn + "'s turn");
			
		} else if (document.turn = "O"){
			document.turn = "X"; 
			$('#message').text("It's " + document.turn + "'s turn");
			
		}
	}



	$('.square').click(function(){
		$(this).text(document.turn);
		switchTurn(); 
	})

	$('.square').click(function(){

	
			if ($('#s1').text() && $('#s2').text() && $('#s3').text() === "X"){
				$('#message').text("Congratulations, X! You've won!")
			} else if ($('#s1').text() && $('#s2').text() && $('#s3').text() === "O"){
				$('#message').text("Congratulations, O! You've won!")
			}

			if ($('#s4').text() && $('#s5').text() && $('#s6').text() === "X"){
				$('#message').text("Congratulations, X! You've won!")
			} else if ($('#s4').text() && $('#s5').text() && $('#s6').text() === "O"){
				$('#message').text("Congratulations, O! You've won!")
			}

			if ($('#s7').text() && $('#s8').text() && $('#s9').text() === "X"){
				$('#message').text("Congratulations, X! You've won!")
			} else if ($('#s7').text() && $('#s8').text() && $('#s9').text() === "O"){
				$('#message').text("Congratulations, O! You've won!")
			}
	})
}




$(document).ready(function(){

	startGame();

});