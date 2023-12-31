console.log("wellcome to tic tac toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("turn.mp3")
let gameover = new Audio("win.wav")
let isgameover = false;
let turn ="X"
//function to change the turn
const changeTurn=() =>{
return turn === "X"? "O" :"X"
}

// function to check for a win win
const checkWin = () =>{
let boxtext = document.getElementsByClassName('boxtext');
let win =[
    [0,1,2,0,5,0],
    [3,4,5,0,15,0],
    [6,7,8,0,25,0],
    [0,3,6,-10,15,90],
    [1,4,7,0,15,90],
    [2,5,8,10,15,90],
    [0,4,8,0,15,45],
    [2,4,6,0,15,135],
]
win.forEach(e =>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won "
        isgameover=true;
        document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "150px"
        document.querySelector('.line').style.width = "30vw"
        document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        gameover.play();
        
    }
})
}

// game logic
music.play()
let boxes =document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext")
    element.addEventListener('click',() => {
        if(boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn = changeTurn();
        audioturn.play();
        checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn ;
            }
        }
    })
})


//add onclick listener to reset game
reset.addEventListener('click',() =>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    })
    turn = "X"
    isgameover = false;
    document.querySelector('.line').style.width = "0vw"

    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0px"

})