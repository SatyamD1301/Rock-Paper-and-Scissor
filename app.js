let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genComChoice=()=>{
    const option=["rock","paper","scissors"];
   const ranIdx= Math.floor(Math.random()*3)
   return option[ranIdx];
}

const drawGame=()=>{
    msg.innerText="game draw"
    msg.style.backgroundColor="yellow"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`YOU Win Your ${userChoice} beats Comp ${compChoice}`
        msg.style.backgroundColor="green";
    }

    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU lose  Comp ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice=genComChoice();


    if(userChoice===compChoice){
        drawGame();

    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false: true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)

    })
})