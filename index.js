//let score1=document.getElementById("score").textContent
//let score2=document.getElementById("guestscore").textContent
let homesc=12
let guestsc=5
function plus1(){
    homesc+=1;
    document.getElementById("score").innerText=homesc;
}
function plus2(){
    homesc+=2
    document.getElementById("score").innerText=homesc;
}
function plus3(){
    homesc+=3
    document.getElementById("score").innerText=homesc;
}
function guestplus1(){
    guestsc+=1
    document.getElementById("guestscore").innerText=guestsc;
}
function guestplus2(){
    guestsc+=2
    document.getElementById("guestscore").innerText=guestsc;
}
function guestplus3(){
    guestsc+=3
    document.getElementById("guestscore").innerText=guestsc;
}
