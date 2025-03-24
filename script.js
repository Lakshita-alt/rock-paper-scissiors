let HumanScore=0;
let ComputerScore=0;


function getComputerChoice(){
    let c = Math.random();
    if (c<=0.33){
        return "rock";
    }
    else if (c>=0.76){
        return "paper";
    }
    else{
        return "scissors";
    }

}
function getHumanChoice(){
    let choice=prompt("rock paper or scissors").toLowerCase();
    return (choice);
}
function playground(C,H){
    if (C=="rock" && H=="paper"){
        console.log(++HumanScore,":",ComputerScore);
        return (HumanScore,ComputerScore);
    }
    else if(C=="paper" && H=="rock"){
        console.log(HumanScore,":",++ComputerScore);
        return (HumanScore,ComputerScore);

    }
    else if (C=="scissors" && H=="paper"){
        console.log(HumanScore,":",++ComputerScore);
        return (HumanScore,ComputerScore);

    }
    else if (C=="paper" && H=="scissors"){
        console.log(HumanScore,":",++ComputerScore);
        return (HumanScore,ComputerScore);

    }
    else if (C=="scissors" && H=="rock"){
        console.log(++HumanScore,":",ComputerScore);
        return (HumanScore,ComputerScore);

    }
    else if(C=="rock" && H=="scissors"){
        console.log(HumanScore,":",++ComputerScore);
        return (HumanScore,ComputerScore);

    }
    else{
        console.log(HumanScore,":",ComputerScore);
        return (HumanScore,ComputerScore);

    }
}
   
let C=getComputerChoice();
let H=getHumanChoice();


for (let i=0;i<5;i++){
    
    playground(C,H);
    C=getComputerChoice();
    H=getHumanChoice();
}

if (HumanScore>ComputerScore){
    console.log("human wins")}
else if(HumanScore===ComputerScore)    {
    console.log("tie");
}
else{
    console.log("computer wins");
}



