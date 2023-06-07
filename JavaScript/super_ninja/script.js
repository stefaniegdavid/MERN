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

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10) {
    super(name, health, speed, strength)
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.wisdom = 10; 
    }
    speakWisdom(){
        super.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    showStats() {
        super.showStats();
        console.log(`Wisdom: ${this.wisdom}`)
    }
}

const ninja1 = new Ninja("Stefanie");
const sensei1 = new Sensei("David");
sensei1.speakWisdom();
sensei1.showStats();