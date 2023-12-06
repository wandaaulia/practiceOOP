class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    uniformPeople() {
        console.log("ini uniform people");
    }
}

class Person extends People {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;

        this.firstName = "First Name";
        this.lastName = "Last Name";
    }

    // menggunakan get 
    get fullName() {
        return `nama lengkapnya ${this.firstName} dan ${this.lastName}`;
    }

    // menggunakan setter 
    set fullName(f) {
        console.log('value ', f);
        let res = f.split(" ");
        this.firstName = res[0];
        this.lastName = res[1];
    }

    sayHello() {
        console.log(`Hello, saya ${this.name} seorang ${this.job}`);
    }

    sayUniform() {
        super.uniformPeople();                                                                                                                     
    }
}

const Dika = new Person();
Dika.name = "Dika";
Dika.age = 23;
Dika.job = "Doctor";

const Dini = new Person("dini", 21,"programmer");

Dika.sayHello();

Dika.sayUniform();

Dika.fullName = "Nice One";

console.log(Dika.fullName);