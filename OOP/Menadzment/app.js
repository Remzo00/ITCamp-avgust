class Osoba {
  constructor(ime, prezime, godine) {
    let _ime = ime;
    let _prezime = prezime;
    let _godine = godine;

    this.getIme = function () {
      return _ime;
    };

    this.getPrezime = function () {
      return _prezime;
    };

    this.getGodine = function () {
      return _godine;
    };
  }
}

class Radnik extends Osoba {
  constructor(ime, prezime, godine, satnica) {
    super(ime, prezime, godine);
    let _satnica = satnica;
    let _radnihSati = 0;

    this.getSatnica = function () {
      return _satnica;
    };

    this.getRadnihSati = function () {
      return _radnihSati;
    };

    this.dodajSate = function (brojSati) {
      _radnihSati += brojSati;
    };

    this.plata = function () {
      return _satnica * _radnihSati;
    };
  }
}

class Menadžer extends Osoba {
  constructor(ime, prezime, godine, nadleznosti) {
    super(ime, prezime, godine);
    let _nadleznosti = nadleznosti;
    let _plata = 0;

    this.getNadleznosti = function () {
      return _nadleznosti;
    };

    this.getPlata = function () {
      return _plata;
    };

    this.postaviPlatu = function (plata) {
      _plata = plata;
    };
  }
}

let radnik1 = new Radnik("Marko", "Marković", 30, 10);
radnik1.dodajSate(40);

let menadzer1 = new Menadžer("Ana", "Anić", 35, "HR");

console.log("Radnik:");
console.log("Ime:", radnik1.getIme());
console.log("Prezime:", radnik1.getPrezime());
console.log("Godine:", radnik1.getGodine());
console.log("Satnica:", radnik1.getSatnica());
console.log("Radnih sati:", radnik1.getRadnihSati());
console.log("Plata:", radnik1.plata());

console.log("\nMenadžer:");
console.log("Ime:", menadzer1.getIme());
console.log("Prezime:", menadzer1.getPrezime());
console.log("Godine:", menadzer1.getGodine());
console.log("Nadležnosti:", menadzer1.getNadleznosti());
console.log("Plata:", menadzer1.getPlata());
