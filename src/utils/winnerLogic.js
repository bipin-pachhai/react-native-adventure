
export const checkWinner = (hero, adventure,heroHP)=>{  
    var winningStatus = true;
    let comment = "";
    let feedback = "";
    let heroLevel = parseInt(hero.level);
    let adLevel = parseInt(adventure.challengeLevel);

    if(heroLevel < adLevel){
        winningStatus =false;
        comment = `The level of Hero is ${hero.level}. You cannot play the adventure greater than the level of your hero.`;
        feedback = `Please upgrade your hero to the level equal or greater than ${adventure.challengeLevel} to play this adventure.`;       
    }

    else if (heroHP <= 0){
    
        winningStatus = false;
        comment =  `The Adventure took all of the Health. You should have boosted the health of the hero.`;
        feedback = "Your Hero died. Better Luck Next Time....."; 

    }
    else{
        winningStatus = true;
        comment = `Had been quite an Adventure. It drained away ${heroHP} health of your hero and took 3 hours to complete.`;
        feedback = "Congratulations!!!! It was all worth it.";
    }


    return {status: winningStatus, comment:comment, feedback : feedback}

}