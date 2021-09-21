// Jawaban Soal 1 ada di bawah ini
const Animal = {
    Name: "John",
    Breed: "Bull Dog",
    weight: 38,
    soundDog: "aug aug",
    sound : function() {
      return this.sound;
    }
  };

class hewan {
    constructor(nama, ras, umur, berat, kaki, suara) {
      this.nama = nama;
      this.ras = ras;
      this.umur = umur;
      this.berat = berat;
      this.kaki = kaki;
      this.suara = suara;
     }
    cekUmur() {
        return `umur hewan ini sudah, ${this.umur}`;
    }

    cekRas() {
        return `ras hewan ini adalah, ${this.ras}`;
    }

    cekKaki() {
        return `kaki hewan ini ada, ${this.kaki}`;
    }

    cekBerat() {
        return `berat hewan ini adalah, ${this.berat}`;    
    }

    cekSuara() {
        return `suara hewan ini adalah, ${this.suara}`
    }
}

const anjing = new hewan('John', 'BullDog', 3, 30, 4, 'guk guk');
const kucing = new hewan('Chrono', 'Persia', 2, 20, 4, 'meong meong');
const monyet = new hewan('Rici', 'Orang Utan', 5, 25, 2, 'uu aa');
const buaya = new hewan('Vangeance', 'Buaya Rawa', 10, 80, 4, 'gapunya suara');
const kambing = new hewan('Rosi', 'Saanen', 2, 50, 4, 'mbee mbee');

console.log(anjing);
console.log(anjing.cekUmur());
console.log(anjing.cekRas());
console.log(anjing.cekKaki());
console.log(anjing.cekBerat());
console.log(anjing.cekSuara());

console.log(kucing);
console.log(kucing.cekUmur());
console.log(kucing.cekRas());
console.log(kucing.cekKaki());
console.log(kucing.cekBerat());
console.log(kucing.cekSuara());

console.log(monyet);
console.log(monyet.cekUmur());
console.log(monyet.cekRas());
console.log(monyet.cekKaki());
console.log(monyet.cekBerat());
console.log(monyet.cekSuara());

console.log(buaya);
console.log(buaya.cekUmur());
console.log(buaya.cekRas());
console.log(buaya.cekKaki());
console.log(buaya.cekBerat());
console.log(buaya.cekSuara());

console.log(kambing);
console.log(kambing.cekUmur());
console.log(kambing.cekRas());
console.log(kambing.cekKaki());
console.log(kambing.cekBerat());
console.log(kambing.cekSuara());

