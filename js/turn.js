var start = $('.start')
var gameCheck = true;


function gameChecker (){
	if(gameCheck) {
		cardTurn();
	} else {
		//$('.cards').hide()
		cardTurn();
	}
}

function cardTurn() {
	var cardDeck= $('#cards');
	var list= $('li');
	var userName= $('input').val()
	var idCheck;
	
	var	valueOne = 0;
	var	valueTwo = 0;
	var score= 0;
	var attempts = 0;
	
	var cardOne;
	var cardTwo;
	var cards= $('.cards');

	
		function cardHide(){
			cardsTwo.hide()
			score = 0;
			$(".score").html(score)
			$('.overlay').hide()
		}
			
			
			$('li').on('click', function() {
					$(this).children().fadeTo(400, 1)
						if(valueOne === 0) {
							valueOne += $(this).val();
							idCheck = $(this).attr('id')  
							console.log(valueOne + " first card")
							cardOne = $(this)
						} else {
						if (0 === 0)
						(idCheck === $(this).attr('id')) 
							{ 
							alert("you cant take the same card twice")	
							} else {
								attempts += 1
								$(".attempts").html(attempts)
								cardTwo = $(this);
								valueTwo += $(this).val();
								console.log(valueTwo + " second card");
									if(valueOne === valueTwo){
										console.log("Good");	
										score += 10; 
										cardOne.delay( 300 ).fadeTo( 400, 0 )
										cardTwo.delay( 300 ).fadeTo( 400, 0 )
											if(score === 80){
												gameCheck = false;
												
													$('.overlay').show();
												
											}
										$(".score").html(score)
										valueOne = 0;
										valueTwo = 0;
									} else {
										console.log("Wrong");
										valueOne = 0;
										valueTwo = 0;
										cards.delay( 600 ).fadeOut( 400 )
								};
						
				};
		});
};

