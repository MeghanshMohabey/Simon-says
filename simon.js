let gameseq = [];
let userseq = [];
let btns = ["green" , "yellow" , "red" , "blue"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function () {
    if(started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function BtnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}
function UserFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);

}
function levelUp (){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    // To flash random buttons
    BtnFlash(randBtn);
}
function checkAns (idx){
    if(userseq[idx] === gameseq[idx]) {
      if(userseq.length == gameseq.length) {
        setTimeout(levelUp , 1000); 
      }
    }
    else {
        h2.innerHTML = `Game Over! Your score is <b> ${level}</b>.<br> Press any key to start.<br> Your highest score is `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
            },150)
        reset();
    }
}
function btnpress () {
    //console.log(this);
    let btn = this;
    UserFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click" , btnpress)
}
function reset () {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}