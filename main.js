///all id's that will be required
// humanScore
// aiScore
// scoreOutput
// rockBtn
// paperBtn
// scissorsBtn
// resetBtn
// gameCntp
const humanScore=document.getElementById("humanScore");
const H_selected=document.getElementById("H_selected");
const aiScore=document.getElementById("aiScore");
const  ai_selected=document.getElementById("ai_selected");
const scoreOutput=document.getElementById("ScoreOutput");
const rockBtn=document.getElementById("RockBtn");
const paperBtn=document.getElementById("PaperBtn");
const scissorsBtn=document.getElementById("ScissorsBtn");
const resetBtn=document.getElementById("resetBtn");
const  gameCntp=document.getElementById("gameCntp");

let humanPoints=Number(humanScore.innerText);
let aiPoints=Number(aiScore.innerText);
let totalCount=0;

function optionSelected(event){
    let aiValue=Math.floor((Math.random()*3)+1);
    if(aiValue===1){
        aiValue="Rock";
    }else if(aiValue===2){
        aiValue="Paper";
    }else if(aiValue===3){
        aiValue="Scissors";
    }
    ai_selected.innerText=aiValue;
    let hValue;
    const buttonId=event.target.id;
    // console.log(buttonId);
    if(buttonId==="RockBtn"){
        hValue="Rock";
    
    }else if(buttonId==="PaperBtn")
    {
        hValue="Paper";
    }else if(buttonId==="ScissorsBtn"){
                hValue="Scissors";
        }
    H_selected.innerText=hValue;
    totalCount++;
    gameCounter(totalCount);
    result(aiValue,hValue);
    points();
    
}
const gameCounter=(totalCount)=>{
        gameCntp.innerText="Game count:"+totalCount;
}
const resetButton=()=>{
    ai_selected.innerText="";
    H_selected.innerText="";
    gameCntp.innerText="Game count:"+"0";
    totalCount=0;
    humanPoints=0;
    aiPoints=0;
    aiScore.innerText=aiPoints;
    humanScore.innerText=humanPoints;
    scoreOutput.innerText="Start Game";
    scoreOutput.style.color="black";
}
const result=(aiValue,hValue)=>{
    console.log(aiValue);
    if(aiValue=="Rock"){
        if(aiValue===hValue){
            scoreOutput.innerText="Draw";
            scoreOutput.style.color="#4831D4";
        }else if(hValue==="Paper"){
            scoreOutput.innerText="You Win!";
            scoreOutput.style.color='green';
            humanPoints++;
            
        }else if(hValue==="Scissors"){
            scoreOutput.innerText="You Lost!";
            scoreOutput.style.color="red";
            aiPoints++;
        }
    }else if(aiValue==="Paper"){
        if(aiValue===hValue){
            scoreOutput.innerText="Draw";
            scoreOutput.style.color="#4831D4";
        }else if(hValue==="Rock"){
            scoreOutput.innerText="You Lost!";
            scoreOutput.style.color="red";
            aiPoints++;
        }else if(hValue==="Scissors"){
            scoreOutput.innerText="You Win!";
            scoreOutput.style.color='green';
            humanPoints++;
        }
    }else if(aiValue==="Scissors"){
        if(aiValue===hValue){
            scoreOutput.innerText="Draw";
            scoreOutput.style.color="#4831D4";
        }else if(hValue==="Rock"){
            scoreOutput.innerText="You Win!";
            scoreOutput.style.color='green';
            humanPoints++;
        }else if(hValue==="Paper"){
            scoreOutput.innerText="You Lost!";
            scoreOutput.style.color="red";
            aiPoints++;
        }
    }
}
const points=()=>{
    humanScore.innerText=humanPoints;
    aiScore.innerText=aiPoints;
}