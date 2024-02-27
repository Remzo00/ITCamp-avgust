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
