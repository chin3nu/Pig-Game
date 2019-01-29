var scores, roundScore, activePlayer, gamePlaying;
init();


/*  These declarations are included in a function called 'init', later to avoid DRY

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/
/***************Dice Button */

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;               // Random number

        var diceDOM = document.querySelector('.dice');              // Display the result
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // UPdate the roundscore if dice is not equal to 1

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {

            nextPlayer();
        }


        // Next Player

        /*   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
           roundScore = 0;
           document.getElementById('current-0').textContent = '0';
           document.getElementById('current-1').textContent = '0';
   
           document.querySelector('.player-0-panel').classList.toggle('active');
           document.querySelector('.player-1-panel').classList.toggle('active');
           document.querySelector('.dice').style.display = 'none';        */           // dice will disappers once player scored 0

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active')


    }
});

/***************** Hold button */

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. add current score to global score
        scores[activePlayer] += roundScore;
        // 2. Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game

        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else {  // next player
            nextPlayer();                    // Once it update the score then 'Next player' should play
        }

    }






});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

/************** New game button */

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

