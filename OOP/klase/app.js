class Osoba {
  constructor(ime, godine) {
    this.ime = ime;
    this.godine = godine;
  }

  pozdrav() {
    console.log(this.ime, this.godine);
  }
}

//instanciranje klase
const novaOsoba = new Osoba("Neko", 20);

novaOsoba.pozdrav();
