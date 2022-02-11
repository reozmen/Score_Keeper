const score1 = document.getElementById('player1-score');
const score2 = document.getElementById('player2-score');

const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const reset = document.getElementById('reset');
const buttondiv = document.getElementById('buttondiv');
const message = document.getElementById('message');

console.log(player1);

player1.addEventListener('click', () => {
    +score1.innerHTML++ ;
    if((Number(score1.innerHTML)) == 5){
         alert("Fred wins!");
    
    player1.style.display = "none";
    player2.style.display = "none";
    document.body.style.backgroundImage = 'url("./havai-fisek.gif")';
   
    document.getElementById("title").style.color = "white"
    document.getElementById("scores").style.color = "white"
    document.getElementById("scoresvalue").style.color = "white"
    message.innerHTML = "FRED WINS!";

   
}
});

player2.addEventListener('click', () => {
    +score2.innerHTML++ ;
    if((Number(score2.innerHTML)) == 5){
        
        alert("Barney wins!");
    
player1.style.display = "none";
player2.style.display = "none";

document.body.style.backgroundImage = 'url("./havai-fisek.gif")';
   
    document.getElementById("title").style.color = "white"
    document.getElementById("scores").style.color = "white"
    document.getElementById("scoresvalue").style.color = "white"
    message.innerHTML = "BARNEY WINS!";

        
}
});

reset.addEventListener('click', () => {
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    player1.style.display = "block";
    player2.style.display = "block";

    document.body.style.backgroundImage = 'url("./white.png")';
    document.getElementById("title").style.color = "black"
    document.getElementById("scores").style.color = "black"
    document.getElementById("scoresvalue").style.color = "black"
    message.innerHTML = "";
    

});



