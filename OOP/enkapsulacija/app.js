//Enkapsulacija
//Getter(Get)
//Setter(Set)

class Osoba {
  constructor(ime, prezime) {
    let _ime = ime;
    let _prezime = prezime;

    this.getIme = () => {
      return _ime;
    };

    this.getPrezime = () => {
      return _prezime;
    };

    this.setIme = (ime) => {
      _ime = ime;
    };

    this.setPrezime = (prezime) => {
      _prezime = prezime;
    };
  }
}

const osoba = new Osoba("Neko", "Nebitno");

console.log(osoba.getIme(), osoba.getPrezime());

osoba.setIme("Remzo");
osoba.setPrezime("Gusinac");

console.log(osoba.getIme(), osoba.getPrezime());
