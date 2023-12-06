// class
class BarangClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    detail() {
        return this.name + " " + this.price;
    }
}


// function constructur
function Ongkir(berat) {
    var pajak = 500;
    var biaya = function() {
        return berat * 1000;
    }

    this.totalBiaya = function () {
        return biaya() + pajak;
    }
}


function repairingHandphone(type) {
    var pajak = 0.02;
    var biaya = 5000;

    let totalHarga = 0;

    function totalService() {
        if(type == "Xiaomi") {
            totalHarga = biaya + 4000 * pajak;
        } else {
            totalHarga = biaya * pajak;
        }

        return totalHarga;
    }

    this.totalAllService = function() {
        return totalService();
    }
    
}




const xiao = new repairingHandphone("");



console.log(Mia.total);




