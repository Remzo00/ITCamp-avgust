//SLOZENI TIPOVI PODATAKA -> sluzi nam za skladistenje vece kolicine podataka
//Nizovi
//Objekti
//Funkcije

//Objekat
var osoba = {
    ime: "Neko",
    prezime: "Nebitno",
    godine: 20,
    zaposljen: true
}
//pristup objektu
console.log(osoba.ime, osoba.prezime)

//niz
var automobili = ["bmw", "mercedes", "audi", "vw", "fiat"]
console.log(automobili[2])

var voce = []
voce[0] = "banana"
voce[1] = "jabuka"

console.log(voce)

// = -> dodela vrednost
// == -> proverava vrednost
// === -> proverava i tip i vrednost

var a = 5
var b = 5

console.log(a === b)
