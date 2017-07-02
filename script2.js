//you have to work on get box function
function startGame(){

	//document.turn = "X";

	if (Math.random() < 0.5){
		document.turn = "O";
	}  else {
		document.turn = "X"
	}

	$('#message').text(document.turn + ' will start.')

	





	$('.square').click(function(){
			if(checkIfPlayerWon('X')){
					$('#message').text("Congratulations, X! You've won!")
					}
				else if(document.turn == "X"){
					document.turn = "O"; 
					$('#message').text("It's " + document.turn + "'s turn");
				};
			else {
				if(document.turn == "O"){
					if(checkIfPlayerWon('O')){
						$('#message').text("Congratulations, O! You've won!")
					}
				}  else {
					document.turn = "X"; 
					$('#message').text("It's " + document.turn + "'s turn");
				};
			}

	})	


	/*$('.square').on('click', function(event){
		var squareSelected = $(this);

		if(squareSelected.hasClass('X') || squareSelected.hasClass('O')) {
			alert("This square has already been selected")
		} else {
			if(player === 1 ){
				squareSelected.addClass('X');
				if(checkIfPlayerWon('X')){
					alert('Congrats! Player ' + player + ' has won!')
				} else {
				player = 2;
				}
			} else {
				squareSelected.addClass('O')
				if(checkIfPlayerWon('O')){
					alert('Congrats! Player ' + player + ' has won!')
				} else {
				player = 1;
				}
			}
		}
	})*/



	function checkIfPlayerWon(symbol){
		//change to text

			if($('#s1').text(symbol) && $('#s2').text(symbol) && $('#s3').text(symbol)){
				return true;
			} else if ($('#s4').text(symbol) && $('#s5').text(symbol) && $('#s6').text(symbol)) {
				return true; 
			} else if ($('#s7').text(symbol) && $('#s8').text(symbol) && $('#s9').text(symbol)) {
				return true; 
			} else if($('#s1').text(symbol) && $('#s4').text(symbol) && $('#s7').text(symbol)){
				return true;
			} else if ($('#s2').text(symbol) && $('#s5').text(symbol) && $('#s8').text(symbol)) {
				return true; 
			} else if ($('#s3').text(symbol) && $('#s6').text(symbol) && $('#s9').text(symbol)) {
				return true; 
			}	else if ($('#s1').text(symbol) && $('#s5').text(symbol) && $('#s9').text(symbol)) {
				return true; 
			} else if ($('#s3').text(symbol) && $('#s5').text(symbol) && $('#s7').text(symbol)) {
				return true; 
			} else {
				return false; 
			}
		}	

	


	
			/*if ($('#s1').text() && $('#s2').text() && $('#s3').text() === "X"){
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
	})*/
}




$(document).ready(function(){

	startGame();

});