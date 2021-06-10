function createNewBtn(n){
    for (let i=0;i<n ;i++) {
        const newBtn = document.createElement('div');
        newBtn.classList.add('btn','btn_'+ options[i]);
        btnBox.appendChild(newBtn);
        const newImg = document.createElement('img');
        newImg.classList.add('hand','btn_'+ options[i]);
        newImg.setAttribute('id',options[i]);
        i=== 0 ? newImg.setAttribute('src', 'assets/rock.png')
        : i===1 ? newImg.setAttribute('src', 'assets/paper.png')
        : i===2 ? newImg.setAttribute('src', 'assets/scissors.png'):"" ;
        newBtn.appendChild(newImg);      
    }
}
const btnBox = document.querySelector('#btnBox');
const abajo = document.querySelector('#abajo');
const score = document.querySelector('#score');
const options =['rock','paper','scissors'];
createNewBtn(3);


//Variables

let userScore= 0;
let computerScore =0;
let ties = 0;
let playerSelect= "";
let compGameplay = "";
let gameOn = "off";
let computerSelection="";
let playerSelection="";

//Setting click events

const buttons = document.querySelectorAll('.btn');
buttons.forEach((btn) =>{
        btn.addEventListener('click',function(e) { 
            playerSelection= e.target.id; 
            console.log(playerSelection);   
            if (gameOn === "on"){
              playRound(playerSelection);
            }
        });
    });
const selec = document.querySelector('#select');
const nGBtn =document.querySelector('#nGBtn');
nGBtn.addEventListener('click',function(e){
        nGBtn.style.visibility='hidden';
        selec.style.visibility='visible';
        resetScores();
        //document.getElementById('result').setAttribute('visibility', "hidden");
        result.style.visibility="hidden";
        launchNewGame();
    });
//Game run

function launchNewGame(nRounds) {
    gameOn= "on";
   
}

function playRound (playerSelection){
    winner = "";
    computerSelection= computerPlay();
    
    console.log("User: " + playerSelection + " -  Computer: "+ computerSelection)
    
    if (playerSelection === computerSelection){
        ties += 1;
        document.getElementById('roundWinner').textContent= "It's a tie";
        document.getElementById("ties").textContent= ties;
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
function userWinsRound(){
    userScore += 1;
    document.getElementById('roundWinner').textContent= "User";
    document.getElementById("userScore").textContent= userScore;
}
function computerWinsRound(){
    computerScore += 1;
    document.getElementById('roundWinner').textContent= "Computer";
    document.getElementById("computerScore").textContent= computerScore;
}
function resetScores(){
    document.getElementById("userScore").textContent= 0;
    document.getElementById("computerScore").textContent= 0;
    document.getElementById("ties").textContent= 0;
    userScore=0;
    computerScore=0;
    ties= 0;
}
const result= document.querySelector('#result');


function playerWin(){
    document.getElementById('result').setAttribute('src', "assets/you win.jpg");
    result.style.visibility="visible";
}
function computerWin(){
    //document.getElementById('result').setAttribute('visibility','visible');
    document.getElementById('result').setAttribute('src','assets/you loose.jpg');
    result.style.visibility="visible";
}

// Computer gameplay

function computerPlay(){
    let alea = Math.floor(Math.random()*3) +1;
    if (alea === 1) {
        compGameplay= "rock";
    }else if (alea === 2){
        compGameplay = "scissors";
    }else compGameplay = "paper";
    return compGameplay;
    
}