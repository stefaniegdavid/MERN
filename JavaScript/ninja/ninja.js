class Ninja {
    constructor (name, health = 90) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.name} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`);
    }

    drinkSake(){
        console.log(`${this.name} drank sake.`);
        this.health +=10;
    }
}

const ninja1 = new Ninja("Stefanie");
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()