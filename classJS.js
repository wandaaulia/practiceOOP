class Rumah {

    type = "Kayu";
    fungsi = "Tidur";

    #luasRumah = "7x7";

    constructor(type, fungsi) {
        this.type = type;
        this.fungsi = fungsi;
    }

    get luasRumah() {
        return this.#luasRumah;
    }

    cariRumah(value) {
        this.#luasRumah = value;
        this.#rumahKetemu();
    }

    #rumahKetemu() {
        console.log("rumah ketemu");
    }

    static displayName = "Rumah Bagus";
}


class ConfigurasiWarna {

    static merah = "red";
    static putih = "#fff";

    static sum(...number) {
        
        let total = 0;

        try {

            if(number.length === 0) {
                throw new Error("Error")
            }

        console.log("program mulai berjalan");

        for(const n of number) {
            total += n;
        } 
        
    }
        catch(e) {
          console.log(e);
    
        } finally {
            console.log("program selesai")
        }

        return total;
    }

}


// const rumahTua = new Rumah("tinggal", "makan");

// console.log(Rumah.displayName);

// rumahTua.cariRumah("Tidur");

// console.log(rumahTua.fungsi);



// inheritance
class Ekspedisi {
    constructor(admin) {
        this.admin = admin;
    }

    greet() {
        console.log("hai")
    }
}

// encapsulation
class Ongkir extends Ekspedisi {
    
     #pajak = 5000;


     constructor(berat, admin) {
        super(admin);
        this.berat = berat;
     }


     #biaya() {
        return this.berat * 1000;
     }

     totalBiaya() {
        let harga = this.#biaya();
        return harga + this.#pajak + this.admin;
     }


     greet() {
        console.log("aku tokped")
     }
}

const tokped = new Ongkir(3, 0);

tokped.pajak = 5000;

let total = tokped.totalBiaya();

console.log(total);

console.log(tokped.greet());