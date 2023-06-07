class Ninja {
    constructor (name, health=90, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    
    sayName(){
        console.log("Welcome " + this.name)
    }

    showStats(){
        console.log(`Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health +=10;
    }
}

const ninja1 = new Ninja("Stefanie");
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()