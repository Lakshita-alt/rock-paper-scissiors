function getComputerChoice(){
    let c = Math.random();
    if (c<=0.55){
        console.log("rock");
    }
    else if (c>=0.76){
        console.log("paper");
    }
    else{
        console.log("scissors");
    }

}
getComputerChoice();
