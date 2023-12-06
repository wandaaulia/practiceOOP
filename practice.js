class Animal {

    makeSound() {
        throw new Error("this is abstract class");
    }

    makeEasy() {
        throw new Error("this is abstract class");
    }

    cooking() {
        return `Cooking ayam`;
    }

    static calling = "sini";
}

class Cat extends Animal {


    #harga = 3000;

    pajak = 2000;
    
    constructor(name) {
        super();
        this.name = name;
    }


    set nameKucing(name) {
        this.name = name;
    }

    get nameKucing() {
        return `${this.name} adalah kucing`;
    }

    makeSound() {
        return "Meoww"
    }

    #totalPajak() {
        return this.pajak;
    }

    totalMakan() {
        let total = this.#totalPajak();
        return this.#harga * 3 +  total;
    }

    cooking() {
        return "Masak sate"
    }


}

const kucing = new Cat("ana");

kucing.name = "ayam";

kucing.pajak = 5000;
console.log(kucing.name);
console.log(kucing.cooking());
console.log(kucing.totalMakan());
console.log(kucing.makeSound());
console.log(Animal.calling);