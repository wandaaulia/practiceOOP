class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        return `Saya manusia`
    }
}


class Programmer extends Human {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }

    sayHi() {
        return `Saya kerja sebagai Programmer`
    }

}

const Dika = new Programmer("Dika", 23, "IT");

console.log(Dika.sayHi());