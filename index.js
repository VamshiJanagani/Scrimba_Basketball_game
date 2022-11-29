let score1=document.getElementById("score")
let score2=document.getElementById("guestscore")
let homesc=12
let guestsc=5
function plus1(){
    homesc+=1;
    score1.innerText=homesc;
}
function plus2(){
    homesc+=2
    score1.innerText=homesc;
}
function plus3(){
    homesc+=3
    score1.innerText=homesc;
}
function guestplus1(){
    guestsc+=1
    score2.innerText=guestsc;
}
function guestplus2(){
    guestsc+=2
    score2.innerText=guestsc;
}
function guestplus3(){
    guestsc+=3
    score2.innerText=guestsc;
}
