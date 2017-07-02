$(document).ready(function(){

	var player = 1
	if(player = 1){
		$('#message').text("It's Player 1's turn")
	} 

	$('.square').on('click', function(event){
		var squareSelected = $(this);

		if(squareSelected.hasClass('X') || squareSelected.hasClass('O')) {
			$('#message').text("This square has already been selected")
		} else {
			if(player === 1 ){
				squareSelected.addClass('X');
				if(checkIfPlayerWon('X')){
					$('#message').text('Congrats! Player ' + player + ' has won!')
				} else {
				player = 2;
					//added this text
					$('#message').text("It's Player 2's turn")
				}
			} else {
				squareSelected.addClass('O')
				if(checkIfPlayerWon('O')){
					$('#message').text('Congrats! Player ' + player + ' has won!')
				} else {
				player = 1;
				//added this text
				$('#message').text("It's Player 1's turn")
				}
			}
		}
	})

	$('#startOver').on('click', function(event){
		console.log("hello");
		$('#s1, #s2, #s3, #s4, #s5, #s6, #s7, #s8, #s9').removeClass("X O");
		$('#message').text("It's Player 1's turn");
	});



	function checkIfPlayerWon(symbol){
		if($('#s1').hasClass(symbol) && $('#s2').hasClass(symbol) && $('#s3').hasClass(symbol)){
			return true;
		} else if ($('#s4').hasClass(symbol) && $('#s5').hasClass(symbol) && $('#s6').hasClass(symbol)) {
			return true; 
		} else if ($('#s7').hasClass(symbol) && $('#s8').hasClass(symbol) && $('#s9').hasClass(symbol)) {
			return true; 
		} else if($('#s1').hasClass(symbol) && $('#s4').hasClass(symbol) && $('#s7').hasClass(symbol)){
			return true;
		} else if ($('#s2').hasClass(symbol) && $('#s5').hasClass(symbol) && $('#s8').hasClass(symbol)) {
			return true; 
		} else if ($('#s3').hasClass(symbol) && $('#s6').hasClass(symbol) && $('#s9').hasClass(symbol)) {
			return true; 
		}	else if ($('#s1').hasClass(symbol) && $('#s5').hasClass(symbol) && $('#s9').hasClass(symbol)) {
			return true; 
		} else if ($('#s3').hasClass(symbol) && $('#s5').hasClass(symbol) && $('#s7').hasClass(symbol)) {
			return true; 
		} else {
			return false; 
		}
	}	
});