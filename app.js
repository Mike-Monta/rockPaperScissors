function createNewBtn(n){
    for (let i=0;i<n ;i++) {
        const newBtn = document.createElement('div');
        newBtn.classList.add('btnDiv','btnDiv_'+ options[i]);
        newBtn.id= options[i];
        btnBox.appendChild(newBtn);
        const newImg = document.createElement('img');
        newImg.classList.add('hand','btn_'+ options[i]);
        newImg.setAttribute('id',options[i]+'hand');
        i=== 0 ? newImg.setAttribute('src', 'assets/rock.png')
        : i===1 ? newImg.setAttribute('src', 'assets/paper.png')
        : i===2 ? newImg.setAttribute('src', 'assets/scissors.png'):"" ;
        newBtn.appendChild(newImg);      
    }
}



//Variables
const options =['rock','paper','scissors'];
let userScore= 0;
let computerScore =0;
let ties = 0;
let playerSelect= "";
let compGameplay = "";
let gameOn = "off";
let computerSelection="";
let playerSelection="";

const btnBox = document.querySelector('#btnBox');
const abajo = document.querySelector('#abajo');
const score = document.querySelector('#score');
const result= document.querySelector('#result');
const selec = document.querySelector('#select');
const objMutated=document.querySelector('#roundWinner');
const scoreUser = document.querySelector('#userScore');
const scoreComputer = document.querySelector('#computerScore');
const scoreTie = document.querySelector('#ties');
createNewBtn(3);


//Setting click events

const buttons = document.querySelectorAll('.btnDiv');
buttons.forEach((btnDiv) =>{
        btnDiv.addEventListener('click',function(e) { 
            playerSelection= btnDiv.id; //e.target.id
            console.log(playerSelection);   
            if (gameOn === "on"){
              playaRound(playerSelection);
            }
        });
    });

const nGBtn =document.querySelector('#nGBtn');
nGBtn.addEventListener('click',function(e){
        nGBtn.style.visibility='hidden';
        selec.style.visibility='visible';
        resetScores();
        result.style.visibility="hidden";
        document.getElementById('rock').style.backgroundColor= "chocolate";
        document.getElementById('paper').style.backgroundColor= "chocolate";
        document.getElementById('scissors').style.backgroundColor= "chocolate";
    
        gameOn= "on";
        //launchNewGame();
    });

 
//function launchNewGame(nRounds) {}

// Computer random gameplay
function computerPlay(){
    let alea = Math.floor(Math.random()*3) +1;
    if (alea === 1) {
        compGameplay= "rock";
    }else if (alea === 2){
        compGameplay = "scissors";
    }else compGameplay = "paper";
    return compGameplay;
}

function playaRound(playerSelection){
    computerSelection= computerPlay();
    console.log("User: " + playerSelection + " -  Computer: "+ computerSelection)
    if (playerSelection === computerSelection){
        ties += 1;
        winnerAnimation("grey");
        document.getElementById('roundWinner').textContent= "It's a tie";
        
        scoreTie.textContent= ties;
        scoreTie.style.transform = "scale(1.2)";
        setTimeout(function(){scoreTie.style.transform = "scale(1)";},500);
    

    }else if  (playerSelection === "rock"){
          if (computerSelection === "scissors"){
            userWinsRound();
        }else{
            computerWinsRound();
          }
    }else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            userWinsRound();
          }else{
            computerWinsRound();
          }
    } else {
        if (computerSelection === "paper"){
            userWinsRound();    
        }else {
            computerWinsRound();
        }
    } 
    
    document.getElementById(computerSelection).style.backgroundColor= "green";
    setTimeout(function(){document.getElementById(computerSelection).style.backgroundColor= "chocolate";},500);   

    if(userScore === 5 || computerScore ===5 || ties ===5){
        selec.style.visibility='hidden';
        nGBtn.style.visibility='visible';
        gameOn ="off";
        if (userScore == 5){
            playerWin();
            return console.log("You win");
        }else if (computerScore ==5){
            computerWin();
            return console.log("COMPUTER WINS");
        }else if( ties == 5){
            return console.log("IT'S a TIE");
        }
    }
}  
// Round end events
function userWinsRound(){
    userScore += 1;
    document.getElementById('roundWinner').textContent= "User";
    scoreUser.textContent = userScore;
    scoreUser.style.transform = "scale(1.2)";
    setTimeout(function(){scoreUser.style.transform = "scale(1)";},500);
    winnerAnimation("green");
    
}

function computerWinsRound(){
    computerScore += 1;
    document.getElementById('roundWinner').textContent= "Computer";
    scoreComputer.textContent= computerScore;
    scoreComputer.style.transform = "scale(1.2)";
    setTimeout(function(){scoreComputer.style.transform = "scale(1)";},500);
    winnerAnimation("red");
}

function winnerAnimation(col){
    objMutated.style.transform = "scale(1.2)";
    objMutated.style.backgroundColor =col;
    setTimeout(function(){objMutated.style.transform = "scale(1)";},500);
}

function resetScores(){
    document.getElementById("userScore").textContent= 0;
    document.getElementById("computerScore").textContent= 0;
    document.getElementById("ties").textContent= 0;
    userScore=0;
    computerScore=0;
    ties= 0;
}


// Final winner
function playerWin(){
    document.getElementById('result').setAttribute('src', "assets/you win.jpg");
    result.style.visibility="visible";
}
function computerWin(){
   
    document.getElementById('result').setAttribute('src','assets/you loose.jpg');
    result.style.visibility="visible";
}

