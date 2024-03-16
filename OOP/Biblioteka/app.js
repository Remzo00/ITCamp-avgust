//BIBLIOTEKA

//KORAK 1
//Kreirati klasu Publikacija koja sadrži: naslov, autor, godina izdavanja.
//Klasa Publikacija ima enkapsulirana polja _naslov, _autor, _godinaIzdavanja koja ce sluziti kao metode za prikaz informacija o publikaciji
//Klasa Publikacija ima metodu prikaziInfo() za prikaz informacija o publikaciji

//KORAK 2
//Kreirati klasu Knjiga koja nasledjuje klasu Publikacija
//Klasa Knjiga ima novo polje: brojStranica koje je takodje enkapsulirano
//Klasa Knjiga ima novo polje koje nije deo konstruktora: dostupna koja je po defaultu true
//Klasa Knjiga ima metodu: iznajmi() koja ce iznajmiti knjigu tako sto ce prvo proveriti da li je knjiga dostupna,
//ako je knjiga dostupna, polje dostupna ce biti promenjeno na false i ispisace da je knjiga iznamljena
//Klasa Knjiga ima metodu: vrati() koja ce vrati knjigu, potrebno je odraditi suprotno od funkcije iznajmi()
//Klasa Knjiga ima metodu: prikaziInfo() koja ce prikazati informacije o knjizi

//KORAK 3
//Napraviti instancu klase Knjiga i pozvati sve metode redom

//Svaka metoda mora da sadrzi console.log gde ce ispisivati informacije o toj metodi

class Publikacija {
  constructor(naslov, autor, godinaIzdavanja) {
    let _naslov = naslov;
    let _autor = autor;
    let _godinaIzdavanja = godinaIzdavanja;

    this.getNaslov = () => {
      return _naslov;
    };

    this.getAutor = () => {
      return _autor;
    };

    this.getGodinaIzdavanja = () => {
      return _godinaIzdavanja;
    };
  }

  prikaziInfo() {
    console.log(this.getNaslov(), this.getAutor(), this.getGodinaIzdavanja());
  }
}

class Knjiga extends Publikacija {
  constructor(naslov, autor, godinaIzdavanja, brojStranica) {
    super(naslov, autor, godinaIzdavanja);
    let _brojStranica = brojStranica;
    this.dostupna = true;

    this.getBrojStranica = () => {
      return _brojStranica;
    };
  }

  iznajmi() {
    if (this.dostupna) {
      this.dostupna = false;
      console.log(`Knjiga ${this.getNaslov()} je iznamljena`);
    } else {
      console.log(`Knjiga ${this.getNaslov()} je slobodna`);
    }
  }

  vrati() {
    if (!this.dostupna) {
      this.dostupna = true;
      console.log(`Knjiga ${this.getNaslov()} je vracena`);
    }
  }

  prikaziInfo() {
    console.log(
      `Naslov: ${this.getNaslov()}, autor: ${this.getAutor()}, godina izdavanja: ${this.getGodinaIzdavanja()}, broj stranica: ${this.getBrojStranica()}, dostupna: ${
        this.dostupna ? "da" : "ne"
      }`
    );
  }
}

const knjiga = new Knjiga("Harry Potter", "J.K. Rowling", 1997, 400);

knjiga.prikaziInfo();
knjiga.iznajmi();
knjiga.prikaziInfo();
knjiga.vrati();
knjiga.prikaziInfo();
