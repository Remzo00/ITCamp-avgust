//KORAK 1
//Definisati klasu Heroj koja sadrži: ime, hp, snagu i oružje.
//Klasa Heroj ima tri metode: napadni, odbraniSe i uzmiOruzje.
//Metoda napadni(heroj):
//Implementiraj metodu napadni, koja prima cudoviste kao argument.
//Ova metoda treba da izračuna snagu napada heroja, uzimajući u obzir snagu oružja ako je dostupna, i da smanji zdravlje monstruma za tu vrednost.
//Metoda odbraniSe(napadSnaga):
//Sledeća metoda je odbraniSe(napadSnaga), koja prima snagu napada kao argument.
//Ova metoda treba da smanji zdravlje heroja za snagu napada, simulirajući efekte napada monstruma.
//Metoda uzmiOruzje(oruzje): Konačno, implementiraj metodu uzmiOruzje(oruzje) koja omogućava heroju da uzme oružje.
//Ova metoda treba da postavi oružje koje je heroj uzeo.

//KORAK 2
//Definisi klasu Cudoviste koja sadrži: ime, hp i snagu.k
//Klasa Cudoviste ima tri metode: napadni, izgubiZivote i uzmiOruzje.
//Metoda napadni(heroj): Implementiraj metodu napadni koja prima heroja kao argument.
//Ova metoda treba da izračuna snagu napada monstruma, uzimajući u obzir snagu oružja ako je dostupna, i da smanji zdravlje heroja za tu vrednost.
//Metoda izgubiZivote(napadSnaga): Sledeća metoda je izgubiZivote, koja prima snagu napada kao argument.
//Ova metoda treba da smanji zdravlje monstruma za snagu napada, simulirajući efekte napada heroja
//Metoda uzmiOruzje(oruzje): Implementiraj metodu uzmiOruzje koja omogućava monstrumu da uzme oružje.
//Ova metoda treba da postavi oružje koje je monstrum uzeo.

//KORAK 3
//Definisi klasu Oruzje koja sadrži: ime, snagu.

//KORAK 4
//Napravi instancu ovih klasa, pozovi metode i testiraj kod.

class Heroj {
  constructor(ime, hp, snaga) {
    this.ime = ime;
    this.hp = hp;
    this.snaga = snaga;
    this.oruzje = null;
  }

  napadni(cudoviste) {
    let snagaNapada = this.snaga;

    if (this.oruzje) {
      snagaNapada += this.oruzje.snaga;
    }

    console.log(
      `${this.ime} je napao ${cudoviste.ime} sa snagom napada ${snagaNapada}`
    );
    cudoviste.izgubiHp(snagaNapada);
  }

  odbraniSe(snagaNapada) {
    console.log(`${this.ime} se brani od napada sa snagom ${napadSnaga}`);
    this.hp -= snagaNapada;
  }

  uzmiOruzje(oruzje) {
    this.oruzje = oruzje;
    console.log(`${this.ime} je uzeo oružje ${oruzje.ime}`);
  }
}

class Cudoviste {
  constructor(ime, hp, snaga) {
    this.ime = ime;
    this.hp = hp;
    this.snaga = snaga;
    this.oruzje = null;
  }

  napadni(heroj) {
    let snagaNapada = this.snaga;
    if (this.oruzje) {
      snagaNapada += this.oruzje.snaga;
    }
    console.log(`${this.ime} napada ${heroj.ime} sa snagom ${napadSnaga}`);
    heroj.odbraniSe(snagaNapada);
  }

  izgubiZivote(napadSnaga) {
    console.log(`${this.ime} gubi ${napadSnaga} života`);
    this.zivoti -= napadSnaga;
  }

  uzmiOruzje(oruzje) {
    this.oruzje = oruzje;
    console.log(`${this.ime} je uzeo oružje ${oruzje.ime}`);
  }
}

class Oruzje {
  constructor(ime, snaga) {
    this.ime = ime;
    this.snaga = snaga;
  }
}

const heroj = new Heroj("Heroj", 100, 10);
const monster = new Cudoviste("Cudoviste", 80, 15);
const mac = new Oruzje("Mač", 5);

heroj.uzmiOruzje(mac);

heroj.napadni(monster);

monster.uzmiOruzje(mac);

monster.napadni(heroj);
