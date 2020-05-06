
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);

    }
}

class dog extends Animal {
    constructor(name) {
        super(name);

    }

    speak() {

        console.log(`${this.name} barks. `);
    }
}

let d = new dog('Ollie');
d.speak();

let obj = new Animal(Max);
max.speak(); 
