let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorePara=document.querySelector("#user-score")
const compscorePara=document.querySelector("#comp-score")


const gencompchoice=()=>{
const options=["rock","paper","scissor"];
const randidx=Math.floor(Math.random()*3);
return options[randidx];
};


const drawgame=()=>{
    msg.innerText="game was draw. Play again";
    msg.style.backgroundColor="gray";
    // userScore++;
    // userscorePara.innerText=userScore;
    // compScore++;
    // compscorePara.innerText=compScore;
}




const showwinner=(userwin,userChoice,compchoice)=>{
if(userwin){
    userScore++;
    userscorePara.innerText=userScore;
msg.innerText=`YaAyYY!!!  You Win , your ${userChoice} beats ${compchoice}`;
msg.style.backgroundColor="green";
}

if(!userwin){
    compScore++;
    compscorePara.innerText=compScore;
msg.innerText=`ohh!! You lose , ${compchoice} beats your ${userChoice}`;
msg.style.backgroundColor="red";
}

};




const playgame=(userChoice)=>{
console.log("user choice was",userChoice);
const compchoice=gencompchoice();
console.log("comp choice was",compchoice);

if(userChoice===compchoice){
    drawgame();
}
else{
    let userwin=true;
    if(userChoice===rock){
        userwin=compchoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userwin=compchoice==="scissor"?false:true;
    }
    else{
        userwin=compchoice==="paper"?true:false;
    }
    showwinner(userwin,userChoice,compchoice);
}
};




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
playgame(userChoice);
    });
});