let computerWin=0;
let playerWin=0; 
let draw=0;


function computerPlay () {
  //Function that chooses Rock, Paper or Scissors randomly//
  //It usses an array for the 3 choices//
    let myArray  = ['Rock', 'Paper', 'Scissors'];

  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  return randomItem
}
function Player () {
//Function prompts the player to choose Rock, Paper or Scissors//
    let myArray  = ['Rock', 'Paper', 'Scissors'];
    var playerChoice= prompt ('Please select Rock, Paper or Scissors')
    const playerChoice2 = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    //playerChoice2 changes whatever is entered into title case-- first letter capitalized and the rest lower case//
    return playerChoice2
}

function playRound(playerSelection, computerSelection, computerWin, playerWin) {
 //This is the function to play one round of the game. It utilizes the parameters of the player's seleciton and compares it to computer's selection//

 if ((computerSelection=='Paper' & playerSelection=='Rock') || (computerSelection=='Rock' & playerSelection=='Scissors') || (computerSelection=='Scissors' & playerSelection=='Paper')) {
        result=("You lose! " + computerSelection + " beats " +playerSelection+"!")
        return computerWinRound}
        else if (computerSelection== playerSelection) {
        return drawRound}
        else if ((playerSelection=='Paper' & computerSelection=='Rock') || (playerSelection=='Rock' & computerSelection=='Scissors') || (playerSelection=='Scissors' & computerSelection=='Paper')) {
        result=("You win! "+ playerSelection + " beats "+computerSelection+"!")
        return playerWinRound}
        else result= ("Incorrect Entry!  You must enter Rock, Paper or Scissors")
        return result;
}
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let drawRound = "Draw!"



//Keeps score and prints out correct messages based on score
function gameScore(result) {

  if (result === playerWinRound) {
    playerWin++;}
    else if (result ===computerWinRound) {
    computerWin++;}
    else
    draw++
  }


    for (let i = 0; i < 5; i++) {
        const playerSelection = Player ();
        const computerSelection = computerPlay();
          
              

      //console.log statements for checking results of code//
      console.log (playerSelection);
      console.log (computerSelection);
      let roundResult= playRound(playerSelection, computerSelection);
      console.log (roundResult);
      gameScore (roundResult)
      console.log ("Player: " + playerWin + " Computer: " + computerWin + " Draws: " +draw)
    }
    
    if (playerWin> computerWin) {
        console.log ("You Win!")}
    else if (computerWin > playerWin) {
        console.log ("Computer Wins!");}
    else {
    console.log ("Tie Game!")}
