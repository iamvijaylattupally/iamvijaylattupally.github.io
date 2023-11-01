var p1 = prompt("Enter the name of the player1 : ")
var p2 = prompt("Enter the name of the player2 : ")

document.getElementsByClassName("playerturn")[0].innerHTML="Turn of X";

var p = document.getElementsByClassName("p")

p[0].innerHTML += p1
p[1].innerHTML += p2

console.log("TicTacToe")
var audio = new Audio("./assets/clicksound.wav")
var boxarr = document.getElementsByClassName("box")

var turn = 'X'

function changeTurn(){
    if(turn=='X'){
        turn='0'
    }
    else{
        turn='X'
    }
}

function winCheck() {
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let boxes = document.getElementsByClassName("boxtext");

    let winDetected = 0; // Initialize winDetected to 0

    win.forEach(e => {
        if (
            boxes[e[0]].innerHTML === boxes[e[1]].innerHTML &&
            boxes[e[1]].innerHTML === boxes[e[2]].innerHTML &&
            boxes[e[1]].innerHTML !== ""
        ) {
            winDetected = 1; // Set winDetected to 1 when a win is detected
        }
    });

    return winDetected; // Return the result after the loop
}



document.getElementsByClassName("btn")[0].addEventListener("click",()=>{
    for(let i=0;i<boxarr.length;i++){
        document.getElementsByClassName("boxtext")[i].innerHTML="";
    }
    listening = true
})




var listening = true;
for(let i=0;i<boxarr.length;i++){
    boxarr[i].addEventListener("click",()=>{
        if (!listening) {
            return;
        }

        document.getElementsByClassName("boxtext")[i].innerHTML=turn;
        changeTurn();
        document.getElementsByClassName("playerturn")[0].innerHTML="Turn of "+turn;
        audio.play()
        let ch = winCheck();
        if(ch===1){
            listening=false
            if(turn==='0'){
                document.getElementsByClassName("playerturn")[0].innerHTML="Player 1 Has Won The Game :: Restart to play again";
            }
            else{
                document.getElementsByClassName("playerturn")[0].innerHTML="Player 2 Has Won The Game :: Restart to play again";
            }
            
        }
    })
}