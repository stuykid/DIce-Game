let randomNumber1 = Math.floor(Math.random()*6) + 1; //random number for left di from 1-6


let leftDice = document.querySelector('.img1') //target class with img1
leftDice.setAttribute("src", "./images/dice" + randomNumber1 +  ".png") //update left dice with random number


let randomNumber2 = Math.floor(Math.random()*6) + 1; //random number for right di from 1-6

let rightDice = document.querySelector('.img2') //target class with img2
rightDice.setAttribute("src", "./images/dice" + randomNumber2 +  ".png") //update left dice with random number

if(randomNumber1 > randomNumber2){ // control flow for win/lose/draw
    document.querySelector("h1").textContent="Player 1 Wins!" // Player 1 wins
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!" // Player 2 wins
}else{
    document.querySelector("h1").textContent="DRAW!" // Draw
};