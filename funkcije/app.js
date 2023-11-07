// var a = 10;
// var a = 20;
// console.log(a);

let a = 10;
let ab = 10;

// function nekafunkcija() {
//   let a = 20;
//   console.log(a);
// }

const obj = {
  ime: "Davud",
};

obj.ime = 10;

console.log(obj);

//ES5
function sabiranje(a, b) {
  console.log(a + b);
}

sabiranje(20, 5);
sabiranje(10, 10);

//ES6
//lambda
//arrow funkcija
const novaFunkcija = () => {};

const pozdrav = (ime, prezime) => {
  console.log("Pozdrav " + ime + " " + prezime);
};

pozdrav("davud", "halitovic");

const pravokutnik = () => {
  let duzina = prompt("Unesi duzinu pravokutnika: ");
  let sirina = prompt("Unesi sirinu pravokutnika: ");
  let rezultat = duzina * sirina;
  console.log("Povrsina je ", rezultat);
};

pravokutnik();

const ime = "Eldar";
const godine = 19;
const poz = `Zdravo, ja sam ${ime}, imam ${godine} godina`;

console.log(poz);
