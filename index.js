var gameTime = game ();
function game (){
var choiceOfThree = window.prompt("Let's Play rock, paper or scissor!");
var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissor";};
if (!choiceOfThree) {
    alert("please enter valid answer! only type in rock, paper, or scissor.")}
else if (computerChoice === choiceOfThree) {
        window.alert("It's a tie!")}
else if ((computerChoice == "rock" && choiceOfThree == "scissor")||(computerChoice == "scissor" && choiceOfThree == "paper")||(computerChoice == "paper" && choiceOfThree == "rock")){
        window.alert("you lost!")}
else if ((computerChoice == "scissor" && choiceOfThree == "rock")||(computerChoice == "paper" && choiceOfThree == "scissor")||(computerChoice == "rock" && choiceOfThree == "paper")){
        window.alert("you won!")}
var playagain = window.confirm("again?")
if (playagain) {game()}}
