// Define an abstract "Animal" class with an abstract method "makeSound"
class Animal {
    makeSound() {
      throw new Error("This method should be overridden by subclasses.");
    }
  }
  
  // Create a "Dog" class that extends "Animal"
  class Dog extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }

    makeSound() {
      return `${this.name} says Woof!`;
    }
  }
  
  // Create a "Cat" class that extends "Animal"
  class Cat extends Animal {

    constructor(name) {
        super();
        this.name = name;
    }

    makeSound() {
      return `${this.name} says Meow!`;
    }
    
    makeSing() {
        return `Singing`
    }
  }


  class Cow {

    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return `${this.name} mowwww`;
    }
  }

  class House {

     makeKitchen() {
        throw new Error(`should be overriding`);
     }
  }


  class Resto {

    constructor(name) {
        this.name = name;
    }

    makeKitchen() {
        return `Sedang buat kitchen`
    }
  }


  const ini = new Resto("resto ayam");

  console.log(ini.makeKitchen());
  
  // Usage
  const myDog = new Dog("Buddy");
  const myCat = new Cat("Whiskers");

  const cat = new Animal();
  
  console.log(myDog.makeSound()); // Output: "Buddy says Woof!"
  console.log(myCat.makeSound()); // Output: "Whiskers says Meow!"
  console.log(myCat.makeSing());
