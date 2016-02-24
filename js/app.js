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
			if (0 === 0) { 
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



var startButton = $('#startButton');
var attempts = 0;
var score= 0;

var usedCards = [ ] 
var counter = 0;
var listSec = $('ul');

//START UP COMENTS
$('.overlay').hide();
$(".attempts").html(attempts);
$(".score").html(score);
$('.wrapper').hide();



//START THE GAME
startButton.click(function(){
	$('.overlayStart').hide();
	$('.wrapper').show();
	$('.wrapper').removeClass('blur');
	$('#mainTitle').html("Welcome " + $('input').val() + ", <br> Click on a card to start!")
	cardShuffle();
	var cards = $('.cards');
	cards.hide();
	gameChecker();
})

//CARDS OBJECT

var cardDeck = [ 
{Card : "card01", value : 10, class: "first"}, 
{Card : "card01", value : 10, class: "first"}, 
{Card : "card02", value : 20, class: "second"}, 
{Card : "card02", value : 20, class: "second"}, 
{Card : "card03", value : 30, class: "third"}, 
{Card : "card03", value : 30, class: "third"}, 
{Card : "card04", value : 40, class: "fourth"}, 
{Card : "card04", value : 40, class: "fourth"}, 
{Card : "card05", value : 50, class: "fived"}, 
{Card : "card05", value : 50, class: "fived"}, 
{Card : "card06", value : 60, class: "sixed"}, 
{Card : "card06", value : 60, class: "sixed"}, 
{Card : "card07", value : 70, class: "sevend"}, 
{Card : "card07", value : 70, class: "sevend"}, 
{Card : "card08", value : 80, class: "eighted"}, 
{Card : "card08", value : 80, class: "eighted"}
]
var cards = cardDeck;

//CALLS THE RANDOM PLACE FUNCTION
function cardShuffle(){
	$.each( cards, function() {
		cardDown();
	})
}

function toggleCards(){
	$(".card").hide();
}


//GIVE THEM A RANDOM PLACE
function cardDown () {
	var lenght = cards.length
	var qI = Math.floor((Math.random() * lenght) + 0);
	var cardValue = cards[qI].value;
	var cardClass = cards[qI].class;
	listSec.append("<li class= 'card' value=" + cardValue + "><h3 class='cards " + cardClass + "'" + "></h3></li>")
	console.log('they are hidden');
	usedCards.push(cards[qI]);
	cards.splice(qI, 1);
	var cardsTwo= $('.cards');
}

//FUNCTION TO PUT THE CARDS BACK IN THE OBJECT
function cardsBack(){
	i=0
	while(i !== 16) {
		cards.push(usedCards[i]);
		i += 1;
	}	
}


//END OF THE GAME OVERLAY
$('#exit').click(function(){
	window.close();
	
})

//PLAY AGAIN
$('#playAgain').click(function(){
	counter -= 16;
	$('#cards').empty()
	cardsBack()
	cardShuffle();
	var score= 0;
	var attempts = 0;
	$(".attempts").html(attempts);
	$(".score").html(score);
	$('.overlay').hide();
	$('.cards').hide()
	gameChecker();
})


