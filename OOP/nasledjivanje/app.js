//Parent klasa
class Osoba {
  constructor(ime, godine) {
    this.ime = ime;
    this.godine = godine;
  }

  prikaziIme() {
    console.log(this.ime, this.godine);
  }
}

//Child klasa
class Student extends Osoba {
  constructor(ime, godine, index) {
    super(ime, godine);
    this.index = index;
  }

  prikaziStudneta() {
    console.log(this.ime, this.godine, this.index);
  }
}

const osoba = new Osoba("Neko", 20);
const student = new Student("Neki Student", 19, 123);

osoba.prikaziIme();
student.prikaziStudneta();

//VEZBA
//Napraviti Klasu Vozilo koja ima boju, brzinu i model i tri metode
//pokreni(), zaustavi(), promeniBrzinu()
//Napraviti klasu Automobil koja nasledjuje klasu Vozilo
//Klasa Automobil ima jedan novi properti: marka
//Napraviti instancu za obe klase i pozvati metode i za Vozilo i Automobil
