
export const generateHero = ()=>{
    let hero = {};
    const firstName = ["Iron","Gold","Ron","Albania","Coco","Fisherman","Aqua","Blade","Fire","Dragon","Arya",
                        "Star","Boomber","Inter","Paradox","Knight","Dormammu","Ghost","Deadman","Pier"];
    const lastName = ["Man","Runner","Typhoon","Heats","Miracle","Ball","Melon","Bonecrusher",
                        "Rider","Stone","End","Crafter","Wharft","Bispot"];

    hero.name = firstName[Math.floor(Math.random() * firstName.length)] +" "+lastName[Math.floor(Math.random() * lastName.length)];
    hero.gold = 100;
    hero.level=1
    hero.power = Math.floor(Math.random() * 5) +1;
    hero.maxHP = Math.floor(Math.random() * 7) +3;
    hero.currentHP = hero.maxHP;
    hero.id = Math.floor(Math.random() * 10000) ;
    return hero;
};

export const generateAdventure = ()=>{
    let adventure = {};

    const adjectives = ["dangerous","menacing","threatening","desperate","visious",
                        "murderous","awful","dreadful","horrid","vile","hopeless","wreteched","desparing"
                        ,"mysterious","irritating"]
    
    const locations = ["jungle","college","desert","glacier","cave","mountain","wetlands","depths"]

    const qualifiers= ["death","no return","no hope","hatred","heartbreak","sorrow","evil"]

    adventure.name = "The "  + adjectives[Math.floor(Math.random() * adjectives.length)] + " " + 
        locations[Math.floor(Math.random() * locations.length)] + " of " + 
        qualifiers[Math.floor(Math.random() * qualifiers.length)]

    adventure.challengeLevel = Math.floor(Math.random() * 5) + 1;
    adventure.demonHP =  Math.floor(Math.random()*3)+1;
    return adventure


};


export const upgradeHero = (hero)=>{


  return hero;
};